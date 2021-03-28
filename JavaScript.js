
// -------------------------------- function to convert time from JSON file to something readable as part of a project that took geological data from an API and built a react app utilizing it. 
// function convertTime(x) {
//   let raw = x 
//       seconds = parseInt((raw/1000) % 60),
//       minutes = parseInt((raw/(1000 * 60)) % 60),
//       hours = parseInt((raw/(1000 * 60 * 60)) % 24);
//       hours = (hours < 10) ? "0" + hours : hours;
//       minutes = (minutes < 10) ? "0" + minutes : minutes;
//       seconds = (seconds < 10) ? "0" + seconds : seconds;
      
//       return `Quake occured ${hours} hours ${minutes} minutes ${seconds} seconds ago`;
//  }


// console.log(convertTime(1605908357680))


// ----------------------------- React tic tac toe tutorial ------------------------------- //
// function Square(props) {
//   return (
//     <button className="square" onClick={props.onClick}>
//       {props.value}
//     </button>
//   );
// }

// class Board extends React.Component {
//   renderSquare(i) {
//     return (
//       <Square
//         value={this.props.squares[i]}
//         onClick={() => this.props.onClick(i)}
//       />
//     );
//   }

//   render() {
//     return (
//       <div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }

// class Game extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       history: [
//         {
//           squares: Array(9).fill(null)
//         }
//       ],
//       stepNumber: 0,
//       xIsNext: true
//     };
//   }

//   handleClick(i) {
//     const history = this.state.history.slice(0, this.state.stepNumber + 1);
//     const current = history[history.length - 1];
//     const squares = current.squares.slice();
//     if (calculateWinner(squares) || squares[i]) {
//       return;
//     }
//     squares[i] = this.state.xIsNext ? "X" : "O";
//     this.setState({
//       history: history.concat([
//         {
//           squares: squares
//         }
//       ]),
//       stepNumber: history.length,
//       xIsNext: !this.state.xIsNext
//     });
//   }

//   jumpTo(step) {
//     this.setState({
//       stepNumber: step,
//       xIsNext: (step % 2) === 0
//     });
//   }

//   render() {
//     const history = this.state.history;
//     const current = history[this.state.stepNumber];
//     const winner = calculateWinner(current.squares);

//     const moves = history.map((step, move) => {
//       const desc = move ?
//         'Go to move #' + move :
//         'Go to game start';
//       return (
//         <li key={move}>
//           <button onClick={() => this.jumpTo(move)}>{desc}</button>
//         </li>
//       );
//     });

//     let status;
//     if (winner) {
//       status = "Winner: " + winner;
//     } else {
//       status = "Next player: " + (this.state.xIsNext ? "X" : "O");
//     }

//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board
//             squares={current.squares}
//             onClick={i => this.handleClick(i)}
//           />
//         </div>
//         <div className="game-info">
//           <div>{status}</div>
//           <ol>{moves}</ol>
//         </div>
//       </div>
//     );
//   }
// }

// // ========================================

// ReactDOM.render(<Game />, document.getElementById("root"));

// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }


// ------------------------------------ Find even in array --------------------------------//
//Nick's solution
// const arrOne = [1,2,3,4,3,2,1];
// function findEvenIndex(arr){
//   for (let i = 0; i <arr.length; i++){
//     let left = 0;
//     let right = 0;
//     for(let j = 0; j<i; j++){
//       left += arr[j]
//     };
//     for (let k = i+1; k<arr.length; k++){
//       right += arr[k]
//     };
//     if(left === right){
//       return i; 
//     };
//   };
//   return -1;
// };

// console.log(findEvenIndex(arrOne));

// const arrOne = [1,2,3,4,3,2,1]; 
// const arrTwo = [1,100,50,-51,1,1];
// const arrThree = [20,10,-80,10,10,15,35];

// MY solution -----------------------------------------------------------------
//I need to loop through the array starting at position 1 and then compare the numbers on the left to the numbers on the right. Need if arr0 through arrn-1 === arrn+1 through arr.length-1 then return arr[i], else, return -1. 
//may actually be easier to split the array at n then compare.... 

// function findEqualSides(arr){
//   for (let i = 0; i<arr.length; i++){
//     let newOne = arr.slice(0, arr[i])
//      console.log(`newOne: ${newOne}`);
//     let sumOne = newOne.reduce(function(a,b){
//       return a+b;
//     }, 0);
//       console.log(`sumOne: ${sumOne}`);
//     let newTwo = arr.slice(arr[i+1])
//      console.log(`newTwo: ${newTwo}`);
//     let sumTwo = newTwo.reduce(function(a,b){
//       return a+b;
//     }, 0);
//       console.log(`sumTwo: ${sumTwo}`);
//         if (sumOne === sumTwo){
//           return i;
//         }else {
//           return -1;
//         }
//   }
// };

// console.log(findEqualSides(arrOne));

// Jed's solution
// const equal = array => {
//   for (let i = 0; i < array.length; i++) {
//     let left = array.slice(0, i).reduce((a,b) => a + b, 0);
//     let right = array.slice(i + 1).reduce((a,b) => a + b, 0);
//     if (left === right) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(equal(arrOne));
// console.log(equal(arrTwo));


  