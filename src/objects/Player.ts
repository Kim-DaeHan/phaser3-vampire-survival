import Phaser from 'phaser';
import { SpriteData } from '@/types/Sprite';

import asst_dude from '/images/dude.png';

class Player extends Phaser.Physics.Arcade.Sprite {
  cursors: Phaser.Types.Input.Keyboard.CursorKeys;

  static preload(scene: Phaser.Scene) {
    scene.load.spritesheet('dude', asst_dude, { frameWidth: 32, frameHeight: 48 });
  }

  constructor(data: SpriteData) {
    let { scene, x, y } = data;
    super(scene, x, y, 'dude');

    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);

    this.setBounce(0.2);
    this.setCollideWorldBounds(true);

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'turn',
      frames: [{ key: 'dude', frame: 4 }],
      frameRate: 20,
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1,
    });

    this.cursors = this.scene.input.keyboard.createCursorKeys();
  }

  update() {
    if (this.cursors.left.isDown) {
      this.setVelocityX(-160);
      this.anims.play('left', true);
    } else if (this.cursors.right.isDown) {
      this.setVelocityX(160);
      this.anims.play('right', true);
    } else {
      this.setVelocityX(0);
      this.anims.play('turn');
    }

    if (this.cursors.up.isDown && this.body.touching.down) {
      this.setVelocityY(-330);
    }
  }
}

export default Player;
