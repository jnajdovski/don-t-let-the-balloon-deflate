import BootScene from "./scenes/BootScene"
import MenuScene from "./scenes/MenuScene"
import LoadingScene from "./scenes/LoadingScene"
import GameScene from "./scenes/GameScene"
import SettingsScene from "./scenes/SettingsScene"

export default () => {
    return {
        type: Phaser.CANVAS,
        width: 1920,
        height: 1080,
        parent: 'game',
        scene: [new BootScene, new MenuScene, new LoadingScene, new GameScene, new SettingsScene],
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
        },
        loader: {
            baseURL: 'src/assets'
        }
    }
}