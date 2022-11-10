import { Scene } from 'phaser'
import { Signal } from 'signals'

export default class ButtonText extends Phaser.GameObjects.BitmapText {
    /**
     * 
     * @param {Scene} scene 
     * @param {number} x 
     * @param {number} y 
     * @param {string} text 
     */
    constructor(scene, x, y, text) {
        super(scene, x, y, 'rammetto_one_base', text, 48)
        this.onClick = new Signal()
        this.setInteractive({ cursor: 'pointer' })
        this.on('pointerdown', () => this._onPress())
        this.on('pointerup', () => this._onRelease())
        this.on('pointerover', () => this._onHover())
        this.on('pointerout', () => this._onOut())
        this.setOrigin(0.5, 0.5)
        scene.add.existing(this)
    }

    _onOut() {
        this.alpha = 1
    }

    _onHover() {
        this.alpha = 0.8
    }

    _onPress() {
        this.alpha = 0.5
    }

    _onRelease() {
        this.alpha = 1
        this.onClick.dispatch()
    }
}