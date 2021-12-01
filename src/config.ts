import Phaser from 'phaser';
import TestScene from "./scenes/TestScene";
import CSSTestScene from "./scenes/CSSTestScene";
import Game from "./scenes/Game";
import UIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin';

export default {
  type: Phaser.AUTO,
  parent: 'phaser-container',
  dom: {
    createContainer: true
  },
  //backgroundColor: '#FFFF00',
  transparent: true,
  scale: {
    width: '100%',
    height: '100%',
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    isPortrait: true
  },
  scene: [CSSTestScene, TestScene, Game],
  plugins: {
    scene: [
      {
        key: 'rexUI',
        plugin: UIPlugin,
        mapping: 'rexUI'
      }
    ]
  }
}
