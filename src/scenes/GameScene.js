import { createSprite } from "../utils/utils";
import Player from "../components/Player";

export default class GameScene extends Phaser.Scene {
    /**
     * @type{Phaser.GameObjects.Sprite}
     */
    background = null;
    /**
     * @type{Player}
     */
    player = null;
    ballon = null;
    gasBottle = null;

    /**
     * @type{number}
     */
    screenCenterX = null;
    /**
     * @type{number}
     */
    screenCenterY = null;
    /**
     * @type{string}
     */
    playerMoving = null;

    constructor() {
        super({key: "game"});
    }

    create() {
        this.screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        this.screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        this.background = createSprite(this, 0,0, 'menu_bg', 0, 0);
        this.cursors = this.input.keyboard.createCursorKeys()
        console.log('create game scene');
        this._createPlayer()
    }

    _createPlayer() {
        this.matter.world.setBounds(0, 0, 1920, 1080);
        this.player = new Player(this, this.screenCenterX, this.screenCenterY + 350);
    }

    update() {
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
    }
}