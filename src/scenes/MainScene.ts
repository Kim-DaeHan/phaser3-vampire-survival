export class MainScene extends Phaser.Scene {
  private character: Phaser.Physics.Arcade.Sprite | null = null;
  // 방향키를 감지할 키를 추가하기
  private upKey: Phaser.Input.Keyboard.Key | null = null;
  private downKey: Phaser.Input.Keyboard.Key | null = null;
  private leftKey: Phaser.Input.Keyboard.Key | null = null;
  private rightKey: Phaser.Input.Keyboard.Key | null = null;

  constructor() {
    super({ key: 'main', active: true });
  }

  preload(): void {
    this.load.image('character', '/public/assets/spritesheet.png');
  }

  create(): void {
    console.log('로딩 끝!!!');

    // x: 100, y: 150 위치에 새로운 이미지 게임 오브젝트 생성
    this.character = this.physics.add.sprite(100, 150, 'character');

    // 사용할 키를 추가해줍니다.
    this.upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    this.downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    this.leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    this.rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
  }

  update(time: number, delta: number): void {
    if (this.character) {
      if (this.upKey?.isDown) this.character.setVelocityY(-100);
      if (this.downKey?.isDown) this.character.setVelocityY(100);
      if (this.leftKey?.isDown) this.character.setVelocityX(-100);
      if (this.rightKey?.isDown) this.character.setVelocityX(100);
    }
  }

  destroy(): void {}
}
