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
    }
}