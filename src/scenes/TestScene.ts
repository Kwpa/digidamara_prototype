import Phaser from 'phaser';

export default class TestScene extends Phaser.Scene
{
  constructor() {
    super('demo-scene')
  }

  preload() {
    this.load.scenePlugin('rexuiplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js', 'rexUI', 'rexUI');
    this.load.image('button-1', 'assets/button.jpg');
    this.load.image('button-2', 'assets/buttonpress.jpg');
    this.load.audio('ding-1', ['assets/ding.mp3'])
  }

  create()
  {
    console.log('demo-button-scene')
    const ding = this.sound.add('ding-1', {loop: false})
    const buttonIdle = this.add.image(400, 300, 'button-1')
    const buttonPress = this.add.image(400, 300, 'button-2')
    var buttons = this.rexUI.add.buttons
    (
      {
        orientation: 0,
        //background: background,
        buttons:
        [
          buttonIdle,
          buttonPress
        ],
        expand: false,
        align: undefined,
        click:
        {
          mode: 'pointerup',
          clickInterval: 100
        }
      }
    );

    buttons.hideButton(1)

    buttons.on('button.click', (button, index, pointer, event) =>
    {
      ding.play()
      this.scene.start(('hello-world'))
    })

    buttons.on('button.over', (button, index, pointer, event) =>
    {
      ding.play()
      buttons.hideButton(0)
      buttons.showButton(1)
      console.log('over')
    })

    buttons.on('button.out', (button, index, pointer, event) =>
    {
      buttons.hideButton(1)
      buttons.showButton(0)
      console.log('out')
    })
  }
}
