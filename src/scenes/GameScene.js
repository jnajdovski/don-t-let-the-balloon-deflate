import { createSprite } from "../utils/utils";

export default class GameScene extends Phaser.Scene {
    background = null;
    player = null;
    ballon = null;
    gasBottle = null;

    constructor() {
        super({key: "game"});
    }

    create() {
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        const background = createSprite(this, 0,0, 'menu_bg', 0, 0);
        console.log('create game scene');
    }
}