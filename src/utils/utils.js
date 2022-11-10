import { GameObjects, Scene } from "phaser";

/**
 * 
 * @param {Scene} scene 
 * @param {number} x 
 * @param {number} y 
 * @param {string} textureKey 
 * @param {number} anchorX 
 * @param {number} anchorY 
 * @param {boolean} interactive 
 * @returns {GameObjects.Sprite}
 */
export const createSprite = (scene, x, y, textureKey, anchorX = 0.5, anchorY = 0.5, interactive = false) => {
    let newSprite = new Phaser.GameObjects.Sprite(scene, x, y, textureKey);
    newSprite.setOrigin(anchorX, anchorY);

    if (interactive) {
        newSprite.setInteractive()
    }
    scene.children.add(newSprite)
    
    return newSprite;
}