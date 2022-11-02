export default class BootScene extends Phaser.Scene {
    constructor() {
        super({key: "boot"});
        console.log('Boot scene');
    }
    
    preload() {}

    create() {
        this.cameras.main.setBackgroundColor('#83e655')
        this.startLoader()
    }

    startLoader(){
        this.load.once("start", this.loadGameAssets)
        this.load.once('complete', () => this.nextScene())
        this.load.start()
    }

    loadGameAssets() {
        console.log('Loading assets');
    }

    nextScene() {
        this.scene.start('menu')
    }
}