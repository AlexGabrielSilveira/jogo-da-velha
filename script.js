let board

let playerO = 'O'
let playerX = 'X'
let currentPlayer = playerO
let gamerOver = false

window.onload = function(){
    setGame()
}

const setGame = () => {
    board = [
        ['','',''],
        ['','',''],
        ['','','']
    ]

    for (let row = 0; row < 3; row++) {
        for (let column = 0; column < 3; column++) {
            //criar div de linhas e colunas ( x e y )

            let boardTile = document.createElement('div')
            boardTile.id = row.toString() + '-' + column.toString()

            boardTile.classList.add('board-tile')
            if(row == 0 || row == 1) {
                boardTile.classList.add('x-line')
            }
            if(column == 0 || column == 1) {
                boardTile.classList.add('y-line')
            }
            boardTile.addEventListener("click", setTile)
            document.getElementById('board').append(boardTile)
        }
    }
}
const setTile = () => {
    if(gamerOver == true) {
        return
    }
    let coordinates = this.id.split('-') 

    let row = parseInt(coordinates[0])
    let column = parseInt(coordinates[1])

    board[row][column] = currentPlayer
}