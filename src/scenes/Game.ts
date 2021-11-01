import Phaser from 'phaser';

export default class Demo extends Phaser.Scene {
  constructor() {
    super('hello-world');
  }

  preload() {
    this.load.image('logo', 'assets/phaser3-logo.png');
    this.load.audio('music-1', ['assets/yourethetop.mp3'])
  }

  create() {

    const music = this.sound.add('music-1', {loop: true})
    music.play()

    const logo = this.add.image(400, 70, 'logo');

    this.tweens.add({
      targets: logo,
      y: 350,
      duration: 1500,
      ease: 'Sine.inOut',
      yoyo: true,
      repeat: -1
    });
  }
}
