namespace gameEngine {
    export class TowerManager {
        screenHeight : number;
        towerCount: number;

        constructor(screenHeight : number, towerCount : number) {
            this.screenHeight = screenHeight;
            this.towerCount = towerCount;
        }

        toPixelString() {

        }

        renderTowers() {
            
        }

        generateTowers() : Coordinate[][] {
            let towers: Coordinate[][] = [
                [

                ]
            ];
    
            for (let counter = 0; counter < this.towerCount; counter++) {
                // Rounds a random number and adds it to the towers array
                let newHeight: number = Math.round(Math.random() * this.screenHeight);
                towers.push(newHeight);
            }

            return towers;
        }
    }
}