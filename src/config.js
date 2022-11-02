import BootScene from "./scenes/BootScene"
import MenuScene from "./scenes/MenuScene"

export default () => {
    return {
        type: Phaser.CANVAS,
        width: 1920,
        height: 1080,
        parent: 'game',
        scene: [new BootScene, new MenuScene],
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
        },
        loader: {
            baseURL: 'src/assets'
        }
    }
}