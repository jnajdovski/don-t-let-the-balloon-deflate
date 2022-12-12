import { ObjectPool } from "@toolcase/base";
import { Perspective2D, Scene, Structs } from "@toolcase/phaser-plus";
import DayNightEvent from "../events/DayNightEvent";
import ManualEvent from "../events/ManualEvent";
import PlayerCollision from "../events/PlayerCollision";
import KeyboardInput from "../features/KeyboardInput";
import GameState from "../GameState";
import Player from "../prefab/Player";

class PlusScene extends Perspective2D.Scene2D {

    constructor() {
        super({
            key: 'plus'
        })
    }

    onCreate() {



        this.world.projection = Structs.Matrix2.create(100, 100)
        // this.world.drawGrid()

        this.world.register('player', Player)

        this.world.add('player', 5, 2)

        this.features.register('keyboard_input', KeyboardInput)


        this.features.on('jump', () => player.jump())

        let player = this.world.add('player', 0, 2)
        player.move()
        
        setTimeout(() => {
            this.world.remove(player)
        }, 100)

        setTimeout(() => {
            player = this.world.add('player', 0, 2)
        }, 1000)

        this.flow.physics.add('player', PlayerCollision)

        this.flow.physics.remove('player')


        this.flow.timer.add('daynight', DayNightEvent, 1)

        this.flow.events.add('manual', ManualEvent)

        this.flow.events.trigger('manual', player, 4)

        // setTimeout(() => {
        //     this.world.projection = 
        //     this.world.drawGrid()
        // }, 1000)
    }

}

export default PlusScene