let defaultSettings = {
    "birdPosition": {
        "x": 2,
        "y": 2
    }
};

gameEngine.SettingsParser.parseSettings(defaultSettings);

input.onButtonPressed(Button.A, function() {

});

let towerManager : gameEngine.TowerManager
= new gameEngine.TowerManager(5, ".", "#", 20);

let towers : number[] = towerManager.generateTowers();