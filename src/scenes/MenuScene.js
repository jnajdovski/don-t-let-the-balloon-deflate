import { createSprite } from "../utils/utils"
import ButtonText from "../components/ButtonText"
import { GameObjects, Scene } from "phaser";

export default class MenuScene extends Scene {
    /**
     * @type{GameObjects.BitmapText}
     */
    btnStart = null;
    /**
     * @type{GameObjects.BitmapText}
     */
    btnSettings = null;
    /**
     * @type{GameObjects.Sprite}
     */
    background = null;

    constructor() {
        super({key: "menu"});
    }

    create() {
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        this.background = createSprite(this, 0,0, 'menu_bg', 0, 0);

        this.btnStart = new ButtonText(this, screenCenterX, screenCenterY, 'START');
        this.btnStart.onClick.addOnce(() => { this.scene.start('game') });

        this.btnSettings = new ButtonText(this, this.btnStart.x, this.btnStart.y + 100, 'SETTINGS');
        this.btnSettings.onClick.addOnce(() => { this.scene.start('settings') });
    }
}