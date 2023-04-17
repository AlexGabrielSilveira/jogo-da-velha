let board

let playerO = 'O'
let playerX = 'X'
let currentPlayer = playerO
let gameOver = false

window.onload = function(){
    setGame()
}

function setGame () {
    board = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ]
    
    for (let row = 0; row < 3; row++) {
        for (let column = 0; column < 3; column++) {
            //criar div de linhas e colunas ( x e y ) && id='0-0'
            
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
function setTile (){
    if(gameOver) {
        return
    }
    let coordinates = this.id.split('-')

    let row = parseInt(coordinates[0])
    let column = parseInt(coordinates[1])

    if(board[row][column] != ' ') {
        return
    }

    board[row][column] = currentPlayer
    this.innerText = currentPlayer

    if(currentPlayer == playerO) {
        currentPlayer = playerX
    }else {
        currentPlayer = playerO
    }

    winner()
}

function winner() {
    //x
    for (row = 0; row < 3; row++) {
        if(board[row][0] == board[row][1] && board[row][1] == board[row][2] && board[row][0]  != " ") {
            for(let i = 0; i < 3; i++) {
                let boardTile = document.getElementById(row.toString() + '-' + i.toString())
                boardTile.classList.add('winner')
            }
            gameOver = true
            return over()
            
        }
    }
    //y
    for(column = 0; column < 3; column++) {
        if(board[0][column] == board[1][column] && board[1][column] == board[2][column] && board[0][column] != " ") {
            for(let i =0; i < 3; i++) {
                let boardTile = document.getElementById(i.toString() + '-' + column.toString())
                boardTile.classList.add('winner')
            }
            gameOver = true
            return over()
        }
    }

    if(board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != ' ') {
        for (let i= 0; i< 3; i++) {
            let boardTile = document.getElementById(i.toString() + '-' + i.toString())
                boardTile.classList.add('winner')
        }
        gameOver = true
        return over()
    }

    if(board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != ' ') {
        
        let boardTile = document.getElementById('0-2')
            boardTile.classList.add('winner')

            boardTile = document.getElementById('1-1')
            boardTile.classList.add('winner')

            boardTile = document.getElementById('2-0')
            boardTile.classList.add('winner')

            
            gameOver = true
            return over()
    }


}

function over () {
    let alert = document.createElement('div')
        document.getElementById('board').append(alert)
        alert.id = "alert"
        alert.innerHTML = `
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Voce venceu, parabens !</strong> 
            <button id='close' type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `
}

