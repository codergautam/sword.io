import Phaser from 'phaser';
import Title from './Title';

class Preload extends Phaser.Scene {
  constructor() {
    super('preload');
  }

  preload() {
    // This is the first scene that will be loaded when opening the game
   //  Do preload logic here, loading assets, etc.

   this.load.image("title", "assets/images/opening.png");
  }

  create() {
    // Switch to the title, or "home" screen
   this.scene.start("title");
  }
}

export default Preload;