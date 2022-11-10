import ButtonText from "../components/ButtonText";
import { createSprite } from "../utils/utils";

export default class SettingsScene extends Phaser.Scene {
    constructor() {
        super({key: "settings"});
    }

    create() {
        const background = createSprite(this, 0,0, 'menu_bg', 0, 0);
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        const btnBack = new ButtonText(this, screenCenterX, screenCenterY, 'BACK');
        btnBack.onClick.addOnce(() => { this.scene.start('menu') });
    }
}