import { createSprite } from "../utils/utils";

export default class LoadingScene extends Phaser.Scene {
    loadingBar = null;
    background = null;

    constructor() {
        super({key: "loading"});
    }

    create() {
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        const background = createSprite(this, 0,0, 'menu_bg', 0, 0);
        console.log('create loading scene');
    }

    startLoader(){
        this.load.once("start", this.loadGameAssets, this)
        this.load.once('complete', () => this.nextScene())
        this.load.start()
    }

    loadGameAssets() {
        console.log('Loading assets');
        
    }

    nextScene() {
        this.scene.start('game')
    }
}