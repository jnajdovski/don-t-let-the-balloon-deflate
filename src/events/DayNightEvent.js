import { Flow } from "@toolcase/phaser-plus";

class DayNightEvent extends Flow.TimeEvent {

    onCreate() {

    }

    onFire() {
        console.log('log')
    }

    onDestroy() {

    }

}

export default DayNightEvent