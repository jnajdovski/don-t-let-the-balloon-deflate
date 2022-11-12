import { GameObjects, Scene } from "phaser"
import { Signal } from 'signals'

export default class Button extends GameObjects.Sprite {
    /**
     * @type{Signal}
     */
    onClick = null
    /**
     * 
     * @param {Scene} scene 
     * @param {number} x 
     * @param {number} y 
     * @param {string} texture 
     */
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture)
        this.onClick = new Signal()
        scene.children.add(this)
        this.setInteractive()
        this.on('pointerdown', () => this._onPress())
        this.on('pointerup', () => this._onRelease())
        this.on('pointerover', () => this._onHover())
        this.on('pointerout', () => this._onOut())
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