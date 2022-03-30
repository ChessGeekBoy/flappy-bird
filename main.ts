// let defaultSettings = {
//     "birdPosition": {
//         "x": 2,
//         "y": 2
//     }
// };

// gameEngine.SettingsParser.parseSettings(defaultSettings);

// input.onButtonPressed(Button.A, function() {

// });

// Tower Generation
let towerManager : gameEngine.TowerManager
= new gameEngine.TowerManager(5,20);

let towers: gameEngine.Coordinate[][] = towerManager.generateTowers();