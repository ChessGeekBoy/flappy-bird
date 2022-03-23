namespace gameEngine {
    export class SettingsParser {
        static parseSettings(json : any) : void {
            let birdPosition: Coordinate
                = new Coordinate
                (
                    json["birdPosition"]["x"],
                    json["birdPosition"]["y"]
                );
            game.createSprite(birdPosition.x, birdPosition.y);
        }
    }
}