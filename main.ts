let debug = false;
//let flappyGame = gameEngine;

//set game difficulty.
gameEngine.Difficulty.Easy;
if (debug) {
    //tone to show difficulty has been set
    music.playTone(196, music.beat(BeatFraction.Whole))
}
//init gravity
//gameEngine.Physics.prototype.initializeGravity();
if (debug) {
    //tone to show gravity has been inited and has worked
    music.playTone(247, music.beat(BeatFraction.Whole))
}
//gen and render towers array
//gameEngine.TowerManager.prototype.generateTowers();
//gameEngine.TowerManager.prototype.renderTowers();
if (debug) {
    //tone to show towers array has worked
    music.playTone(185, music.beat(BeatFraction.Whole))
}


basic.forever(function () {
    //used to see if program runs
    basic.showString("Hello world! Test.");
})
