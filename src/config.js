import BootScene from "./scenes/BootScene"
import MenuScene from "./scenes/MenuScene"
import GameScene from "./scenes/GameScene"
import SettingsScene from "./scenes/SettingsScene"
import PlusScene from "./scenes/PlusScene"

export default () => {
    return {
        type: Phaser.CANVAS,
        width: 1920,
        height: 1080,
        parent: 'game',
        scene: [new BootScene, new MenuScene, new GameScene, new SettingsScene, new PlusScene],
        physics: {
            default: 'matter',
            matter: {
                enableSleeping: true,
                gravity: {
                    y: 0
                },
                debug: true
            }
        },
        dom: {
            createContainer: true,                
        },
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
        },
        loader: {
            baseURL: 'assets'
        }
    }
}