import { Flow, Perspective2D } from "@toolcase/phaser-plus";

class PlayerCollision extends Flow.CollisionEvent {

    /**
     * @type {Perspective2D.World}
     */
    world = null

    onCreate() {
        this.world = this.scene.features.get('world')
    }

    onEnter(bodyA, bodyB, event) {
        console.log(bodyA, bodyB)
    }

    onExit(bodyA, bodyB, event) {

    }

    onDestroy() {
        
    }

}

export default PlayerCollision