namespace gameEngine {
    export class Physics {
        gravityLevel: number;
        sprite: Coordinate[];

        constructor(gravityLevel : number, sprite : Coordinate[]) {
            this.gravityLevel = gravityLevel;
            this.sprite = sprite;
        }

        //Forever loop for gravity in a different thread
        initializeGravity() {
            while (true) {        
                control.inBackground(function() {
                    basic.forever(function () {
                        //gravity code here
                    })
                })
            }
        }

        checkForCollisions(birdPosition: gameEngine.Coordinate,
            towers: gameEngine.Coordinate[][]) {
            for (let index = 0; index < towers.length; index++) {
                for (let indexInner = 0; indexInner < towers[index].length; indexInner++) {
                    const coordinateToCheck : gameEngine.Coordinate = towers[index][indexInner];
                    if (birdPosition === coordinateToCheck) {
                        return true;
                    }
                }
            }
        
            return false;
        }
    }
}