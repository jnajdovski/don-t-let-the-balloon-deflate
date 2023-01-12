import { createSprite } from "../utils/utils";
import Player from "../components/Player";
import { Scene } from "@toolcase/phaser-plus";

export default class GameScene extends Scene {
    /**
     * @type {Phaser.GameObjects.Sprite}
     */
    background = null;
    /**
     * @type {Player}
     */
    player = null;
    ballon = null;
    gasBottle = null;

    /**
     * @type {Phaser.GameObjects.TileSprite}
     */
    ground = null;

    /**
     * @type {number}
     */
    screenCenterX = null;
    /**
     * @type {number}
     */
    screenCenterY = null;
    /**
     * @type {string}
     */
    playerMoving = null;

    /**
     * @type {Phaser.GameObjects.Sprite}
     */
    cursorTarget = null;

    constructor() {
        super({key: "game"});
    }

    onCreate() {
        this.screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        this.screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        this.background = createSprite(this, 0,0, 'menu_bg', 0, 0);
        this.ground = this.add.tileSprite(0, 1200, this.cameras.main.width, this.cameras.main.height, 'ground');
        this.ground.setOrigin(0, 0.5)
        this.cursors = this.input.keyboard.createCursorKeys()
        this._createPlayer()
        this.cursorTarget = createSprite(this, 0, 0, 'cursor_target');
        this.cursorTarget.setScale(0.1)
        this.input.on('pointermove', (pointer) => {
            this.cursorTarget.x = pointer.x;
            this.cursorTarget.y = pointer.y;
        });

        this.children.add(this.ground);
        this.children.add(this.cursorTarget);
        console.log('create game scene');
    }

    _createPlayer() {
        this.matter.world.setBounds(0, 0, 1920, 1080);
        this.player = new Player(this, this.screenCenterX - 700, this.screenCenterY + 350);
    }

    update(time, delta) {
        super.update(time, delta)
        if (this.player !== null) {
            if (this.cursors.left.isDown) {
                this.player.move('left')
                this.playerMoving = 'left'
            }
    
            if (this.cursors.right.isDown) {
                this.player.move('right')
                this.playerMoving = 'right'
            }

            if (this.cursors.left.isUp && this.cursors.right.isUp) {
                this.player.move('idle')
                this.playerMoving = 'idle'
            }
        }

        if (this.ground) {
            this.ground.tilePositionX += 2;
        }
    }
}