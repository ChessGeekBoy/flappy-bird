namespace gameEngine {
    export class TowerManager {
        screenHeight : number;
        onPixel: string;
        offPixel: string;
        towerCount: number;

        constructor(screenHeight : number, onPixel : string, offPixel : string, towerCount : number) {
            this.screenHeight = screenHeight;
            this.onPixel = onPixel;
            this.offPixel = offPixel;
            this.towerCount = towerCount;
        }

        toPixelString() {

        }

        renderTowers() {

        }

        generateTowers() : number[] {
            let towers: number[] = [];
    
            for (let counter = 0; counter < this.towerCount; counter++) {
                // Rounds a random number and adds it to the towers array
                let newHeight: number = Math.round(Math.random() * this.screenHeight);
                towers.push(newHeight);
            }

            return towers;
        }
    }
}