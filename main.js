const TicTacToe = () => {
  let board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  let winner = null;
  let xTurn = null;

  while (!winner) {

    paintBoard(board);

    if(xTurn === null) {
      xTurn = Math.floor(Math.random() * 1) === 0 ?  true : false;
    }

    let coordinateString = window.prompt(`${xTurn? 'X' : 'O'}, enter the coordinates for the piece you want to toggle in this form: rowIndex colIndex. type 'q' to quit`);
    if (coordinateString === 'q') {
      return;
    }
    let row = Number(coordinateString[0]);
    let col = Number(coordinateString[2]);
    if(row === NaN || col === NaN || row < 0 || row > 2 || col < 0 || col > 2) {
      console.log('invalid input. Try again');
      continue;
    } else if (board[row][col]) {
      console.log('looks like that square is taken');
      continue;
    } else {
      board[row][col] = xTurn ? 'X' : 'O';
      winner = checkWinner(board);
      xTurn = !xTurn;
    }
  }
  paintBoard(board);
  console.log(winner, ' is the winner');

}

const checkWinner = (board) => {
  if (board[0][0] === board[0][1] && board[0][0] === board[0][2] && board[0][0]) {
    return board[0][0];
  } else if (board[1][0] === board[1][1] && board[1][0] === board[1][2] && board[1][0]) {
    return board[1][0];
  } else if (board[2][0] === board[2][1] && board[2][0] === board[2][2] && board[2][0]) {
    return board[2][0];
  } else if (board[0][0] === board[1][0] && board[1][0] === board[2][0] && board[0][0]) {
    return board[0][0];
  } else if (board[0][1] === board[1][1] && board[1][1] === board[2][1] && board[0][1]) {
    return board[0][1];
  } else if (board[0][2] === board[1][2] && board[1][2] === board[2][2] && board[0][2]) {
    return board[0][2];
  } else if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0]) {
    return board[0][0]
  } else if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2]) {
    return board[0][2]
  } else {
    return null;
  }
}

const paintBoard = (board) => {
  let outString = '';
  for(let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if(!board[i][j]) {
        outString += '-';
      } else {
        outString += board[i][j];
      }
    }
    outString += '\n';
  }
  console.log(outString);
}

TicTacToe();
