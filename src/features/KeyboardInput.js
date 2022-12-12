import { Feature } from "@toolcase/phaser-plus";
import { Input } from "phaser";

class KeyboardInput extends Feature {

    onCreate() {
        this.scene.input.keyboard.addKey(Input.Keyboard.KeyCodes.SPACE).on(Input.Keyboard.Events.DOWN, this.onJump, this)
    }

    onUpdate(time, delta) {

    }

    onDestroy() {

    }

    onJump() {
        this.emit('keyboard_jump', 2)
    }

}

export default KeyboardInput