// Calculate the number of grains of wheat on a chessboard given that the number on each square doubles.
// There once was a wise servant who saved the life of a prince. The king promised to pay whatever the servant could dream up. Knowing that the king loved chess, the servant told the king he would like to have grains of wheat. One grain on the first square of a chess board. Two grains on the next. Four on the third, and so on.
// There are 64 squares on a chessboard.
// Write code that shows:
// how many grains were on each square, and
// the total number of grains

class ChessSquare {
    constructor(squareNumber, grainNumber) {
        this.squareNumber = squareNumber;
        this.grainNumber = grainNumber;
    }

    squareArray() {
        let lowEnd = 1;
        let highEnd = 64;
        const squareArray = [];
        while(lowEnd <= highEnd) {
            squareArray.push(lowEnd++);
        }
        this.squares = squareArray;
    }

    addDoubleTheGrains() {
        let grainObject = {};
        let grainArray = [];
        for(let i=0; i < this.squares.length; i++) {
            grainArray.push(2 ** this.squares[i]);
            const grainNumber = this.squareArray(grainArray[i]);
            grainObject[grainArray[i]] = this.squareNumber;
        }
        return grainObject;
    }
}
// Attempt at starting doubling at index 1 (not working)
// addDoubleTheGrains() {
//     let grainObject = {};
//     let grainArray = [];
//     for(let i=0; i < this.squares.length; i++) {
//         if (i === 0) {
//             return 1;
//         } else {
//             grainArray.push(2 ** this.squares[i]);
//         }
//     }
//     return grainArray;
// }

const square52 = new ChessSquare(52, "");
console.log(square52.squareArray());
console.log(square52.addDoubleTheGrains());


