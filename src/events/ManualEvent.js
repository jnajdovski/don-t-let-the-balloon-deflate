import { Flow } from "@toolcase/phaser-plus";

class ManualEvent extends Flow.Event {

    onFire(player) {
        console.log('neso', player)
    }

}

export default ManualEvent