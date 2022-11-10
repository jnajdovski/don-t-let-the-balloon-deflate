import { createSprite } from "../utils/utils"
import ButtonText from "../components/ButtonText"

export default class MenuScene extends Phaser.Scene {
    background = null;
    btnStart = null;
    btnSettings = null;
    
    constructor() {
        super({key: "menu"});
    }

    create() {
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        this.background = createSprite(this, 0,0, 'menu_bg', 0, 0);
        this.btnStart = new ButtonText(this, screenCenterX, screenCenterY, 'START');
        this.btnSettings = new ButtonText(this, this.btnStart.x, this.btnStart.y + 100, 'SETTINGS');
    }
}