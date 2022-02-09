export namespace towerManagement {
    export function generateTowers(maxHeight: number, towerCount: number): number[] {
        let towers: number[] = [];
    
        for (let counter = 0; counter < towerCount; counter++) {
            // Rounds a random number and adds it to the towers array
            let newHeight: number = Math.round(Math.random() * maxHeight);
            towers.push(newHeight);
        }

        return towers;
    }

    export function renderTowers(towerHeights: number[]): void {
        
    }

    export function toPixelString(tower: number): string {
        let pixelString: string = "";



        return pixelString;
    }
}