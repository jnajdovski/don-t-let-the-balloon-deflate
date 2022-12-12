import { Perspective2D } from "@toolcase/phaser-plus";
import { GameObjects, Physics } from "phaser";

class Player extends Perspective2D.GameObject2D {

    /**
     * @type {GameObjects.Sprite}
     */
    base = null

    onCreate() {
        this.base = this.scene.add.sprite(0, 0, 'player', 0)
        this.add(this.base)

        const MatterJS = Physics.Matter.Matter

        const parts = [
            MatterJS.Bodies.rectangle(0, 0, 64, 64, { label: 'player' }),
            MatterJS.Bodies.rectangle(25, 0, 40, 50, { isSensor: true, label: 'player:hitbox' }),
        ]
        const compoundBody = MatterJS.Body.create({
            parts: parts,
            inertia: Infinity,
        })

        console.log('create player')

        this.scene.matter.add.gameObject(this)
        this.setExistingBody(compoundBody)

        this.scene.matter.world.remove(this.body)
    }

    onAdd() {
        this.scene.matter.world.add(this.body)
    }

    onUpdate(time, delta) {
        
    }

    onRemove() {
        this.scene.matter.world.remove(this.body)
    }

    onDestroy() {

    }

    move() {
        this.setVelocityX(20)
    }

}

export default Player