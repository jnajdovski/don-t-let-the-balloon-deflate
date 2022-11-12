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
    speed = 10;
    /**
     * @type{number}
     */
    playerScale = 0.3;

    /**
     * @type {Phaser.Physics.Matter.Sprite}
     */
     player = null;

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
            frameRate: 20,
            frames: scene.anims.generateFrameNumbers(`player`, {start: 0, end: 5}),
            repeat: -1
        })
    
        this.player.setScale(this.playerScale);

        this.player.play('run');
        this.player.setVelocity(0,0);
    }

    /**
     * 
     * @param {string} direction 
     */
    move(direction) {
        if (direction === this.dirLeft) {
            this.player.setScale(this.playerScale * -1, this.playerScale);
            this._moveLeft();
        } else if (direction === this.dirRight) {
            this.player.setScale(this.playerScale);
            this._moveRight();
        } else if (direction == this.dirIdle) {
            this.player.setScale(this.playerScale);
            this.player.setVelocityX(0)
        }
    }

    _moveLeft() {
        this.player.setVelocityX(-this.speed);
    }

    _moveRight() {
        this.player.setVelocityX(this.speed);
    }
}