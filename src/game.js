import Phaser from "phaser"

export default class Game extends Phaser.Game {
    constructor(config) {
        super(config(config))
        this.scene.start('boot')
    }
  }