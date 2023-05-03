class Rocket extends Phaser.GameObjects.Sprite { //rocket sprite intergration to the play section
    constructor(scene, x, y , texture, frame){
        super(scene, x,y, texture,frame);

        scene.add.existing(this);
        
        this.isFiring = false;
        this.moveSpeed = 2;

        this.sfxRocket = scene.sound.add('sfx_rocket'); // add rocket sfx

    }

    update() {
        //left and right movement
        if (!this.isFiring) {
            if (keyLEFT.isDown && this.x >= borderUISize + this.width){
                this.x -= this.moveSpeed;
            } else if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width) {
                this.x += this.moveSpeed;
            }
        }

        if (Phaser.Input.Keyboard.JustDown(keyF) && !this.isFiring) {  //firing button
            this.isFiring = true;
            this.sfxRocket.play();
        }

        if (this.isFiring && this.y >= borderUISize * 3 + borderPadding) { //if fired move up
            this.y -= this.moveSpeed;
        }

        if (this.y <= borderUISize * 3 + borderPadding) { //reset on miss
            this.isFiring = false;
            this.y = game.config.height - borderUISize - borderPadding;
        }
    }

    reset() {
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding;   //places the rocket back to ground
    }
}