import { GameObjects, Scene } from "phaser";
import ButtonText from "../components/ButtonText";
import { createSprite } from "../utils/utils";

export default class SettingsScene extends Scene {
    /**
     * @type{GameObjects.Sprite}
     */
    background = null;
    /**
     * @type{GameObjects.BitmapText}
     */
    btnBack = null;

    constructor() {
        super({key: "settings"});
    }

    create() {
        this.background = createSprite(this, 0,0, 'menu_bg', 0, 0);
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        this.btnBack = new ButtonText(this, screenCenterX, screenCenterY, 'BACK');
        this.btnBack.onClick.addOnce(() => { this.scene.start('menu') });
    }
}