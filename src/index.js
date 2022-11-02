import Game from "./game"
import config from './config'

class App {
    constructor() {
        this.onLoad()
    }

    onLoad() {
        new Game(config)
    }
}

new App
