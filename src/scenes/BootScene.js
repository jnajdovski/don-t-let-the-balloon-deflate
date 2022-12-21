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
        this.load.once("start", this.loadGameAssets, this)
        this.load.once('complete', () => this.nextScene())
        this.load.start()
    }

    loadGameAssets() {
        console.log('Loading assets');
        this.load.image('menu_bg', 'bg.jpg')
        this.load.image('ground', 'ground.png')
        this.load.bitmapFont('second', 'fonts/second/second.png', 'fonts/second/second.xml')
        this.load.bitmapFont('rammetto_one_base', 'fonts/rammetto_one_base/rammetto_one_base.png', 'fonts/rammetto_one_base/rammetto_one_base.xml')
    }

    nextScene() {
        this.scene.start('menu')
    }
}