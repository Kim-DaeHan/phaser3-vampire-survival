import { GameConfig } from './config';

export class Game extends Phaser.Game {}

window.addEventListener('load', () => {
  return new Game(GameConfig);
});
