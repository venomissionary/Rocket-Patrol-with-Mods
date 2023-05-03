class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }
    preload() {
         // loads the audio
  this.load.audio('sfx_select', './assets/blip_select12.wav'); 
  this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
  this.load.audio('sfx_impact03', './assets/impact03.wav');       //bringing in 3 new explosion sounds.
  this.load.audio('sfx_impact02', './assets/impact02.wav');
  this.load.audio('sfx_impact01', './assets/impact01.wav');
  this.load.audio('music', './assets/gameMusic.wav');
 
  this.load.image('Background', './assets/Space.png');
  this.load.image('Name', './assets/Title.png');        //images used for main menu
  this.load.image('Option', './assets/Diff.png');
    }

    create() {

      const MainMenuBackground = this.add.image(0, 0, 'Background').setOrigin(0);
      MainMenuBackground.displayWidth = this.game.config.width;
      MainMenuBackground.displayHeight = this.game.config.height; 

      const mainTitle = this.add.image(0,0, 'Name').setOrigin(0.0);
      mainTitle.displayWidth = this.game.config.width/0.99;
      mainTitle.displayHeight = this.game.config.height/3; 

      const optionDiff = this.add.image(0,0, 'Option').setOrigin(0, -1.5);
      optionDiff.displayWidth = this.game.config.width/0.99;
      optionDiff.displayHeight = this.game.config.height/3; 

          keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
          keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
      }

      update(){
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            // easy mode
            game.settings = {
              spaceshipSpeed: 3,
              gameTimer: 60000    
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene');    
          }
          if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            // hard mode
            game.settings = {
              spaceshipSpeed: 4,
              gameTimer: 45000    
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene');    
          }
      }
}
 