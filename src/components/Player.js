import { Scene } from "phaser";


export default class Player{
    /**
     * @type{string}
     */
    dirLeft = 'left';
    /**
     * @type{string}
     */
    dirRight = 'right';
    /**
     * @type{string}
     */
    dirIdle = 'idle';
    /**
     * @type{number}
     */
    speed = 0.01;
    /**
     * @type{number}
     */
    playerScale = 0.1;

    /**
     * @type {Phaser.Physics.Matter.Sprite}
     */
    player = null;

    /**
     * @type{string}
     */
    currentDir = this.dirIdle

    /**
     * 
     * @param {Scene} scene 
     * @param {number} x 
     * @param {number} y 
     */
    constructor(scene, x, y) {
        this.player = scene.matter.add.sprite(x, y, 'player', 0)
        console.log(this.player.body);
        scene.anims.create({
            key: 'run',
            frameRate: 18,
            frames: scene.anims.generateFrameNumbers(`player`, {start: 0, end: 5}),
            repeat: -1
        })
    
        this.player.setScale(this.playerScale);

        this.player.play('run');
    }

    /**
     * 
     * @param {string} direction 
     */
    move(direction) {
        if (direction === this.dirLeft) {
            this.player.setScale(this.playerScale * -1, this.playerScale);
            this._moveLeft();
            this.currentDir = direction;
        } else if (direction === this.dirRight) {
            this.player.setScale(this.playerScale);
            this._moveRight();
            this.currentDir = direction;
        } else if (direction == this.dirIdle && this.currentDir !== direction) {
            this.player.setScale(this.playerScale);
            this.player.thrust(0)
            this.currentDir = direction;
        }
    }

    _moveLeft() {
        this.player.thrust(-this.speed)
    }

    _moveRight() {
        this.player.thrust(this.speed)
    }
}