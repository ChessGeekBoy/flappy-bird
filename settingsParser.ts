namespace gameEngine {
    export class SettingsParser {
        static parseSettings(json: string) : void {
            let object : any = JSON.parse(json);
            let birdPosition: Coordinate
                = new Coordinate(object["birdPosition"]["x"],
                    object["birdPosition"]["y"]);
            game.createSprite(birdPosition.x, birdPosition.y);
        }
    }
}