import { GameObjects, Scene } from "phaser";
import { createSprite } from "../utils/utils";

export default class LoadingScene extends Scene {
    /**
     * @type{GameObjects.Sprite}
     */
    loadingBar = null;
    /**
     * @type{GameObjects.Sprite}
     */
    background = null;

    constructor() {
        super({key: "loading"});
    }

    create() {
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        this.background = createSprite(this, 0,0, 'menu_bg', 0, 0);
        console.log('create loading scene');
        this.startLoader()
    }

    startLoader(){
        this.load.once("start", this.loadGameAssets, this)
        this.load.once('complete', () => this.nextScene())
        this.load.start()
    }

    loadGameAssets() {
        console.log('Loading assets');
        this.load.spritesheet('player', 'character/player_run.png', {frameWidth: 724, frameHeight: 1302})
    }

    nextScene() {
        this.scene.start('game')
    }
}