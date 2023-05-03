/* 
Steven Hernandez 
Rocket Patrol Reloaded IV: The Rocketing (electric booglaoo)
14 hours
<<<<<<PLEASE USE CHROME>>>>>>
IT WILL BUG OUT IN OPERA Gx, FIREFOX, EDGE ANYTHING else!


Create a new scrolling tile sprite for the background (5)
spaceRock.png (pixilart.org)
[the astroid is the tile sprite made in pixilart]

Create a new title screen (e.g., new artwork, typography, layout) (10)
Title.png (flaming text.com) 
Diff.png (flaming text.com)
Space.png (adobe stock)
[the space backround, title, and difficulty options are made in Flaming text.]

- Create a new enemy Spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (15)
[Added new green UFO as the bonus spaceship that is worth 40 points
it's written as (‘HARD’) as from UFO.png. Source: (self created pixiliart)]


Add your own (copyright-free) background music to the Play scene (please be mindful of the volume) (5)
Added in Menu.JS from the assets folder. 
Source:  (https://mixkit.co)
[added music that was free to download and imported it to the program.]

Create 4 new explosion sound effects and randomize which one plays on impact (10)
Total 3 explosion sounds.
impact 01.wav     (https://mixkit.co)
Impact 02.wav    (https://mixkit.co)
Impact03.wav     (https://mixkit.co)

implement the 'FIRE' UI text from the original game (5) 
[I attempted to bring in a custom font similar to the orginal but was hard to find 
proper information on how to correctly implement custom fonts in phaser, the 'Fire Computer' with red text
is my best attempt] The .tiff file is located in the assets. 

Tried my best at it. I do need help with understanding how to use Github which i will ask the T.A's in person for 
help. It's not what i used in Community college so im still new to how classes here uses Git. 


*/

let config = {
    type: Phaser.CANVAS,
    width: 640,                 //the window size of the game 
    height: 480,
    scene: [ Menu, Play ]
}
 
let game = new Phaser.Game(config);  

let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

let keyF, keyR, keyLEFT, keyRIGHT;  //keyboard key variables



