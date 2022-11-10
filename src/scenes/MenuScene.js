import { createSprite } from "../utils/utils"
import ButtonText from "../components/ButtonText"

export default class MenuScene extends Phaser.Scene {
    constructor() {
        super({key: "menu"});
    }

    create() {
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        const background = createSprite(this, 0,0, 'menu_bg', 0, 0);
        const btnStart = new ButtonText(this, screenCenterX, screenCenterY, 'START')
        btnStart.onClick.addOnce(() => { this.scene.start('loading') })
        const btnSettings = new ButtonText(this, btnStart.x, btnStart.y + 100, 'SETTINGS');
        btnSettings.onClick.addOnce(() => { this.scene.start('settings') })
    }
}