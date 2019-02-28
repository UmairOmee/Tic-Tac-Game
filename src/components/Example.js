// import React, { Component } from 'react';
// // import './App.css';
// // import Announcement from './components/Announcement';
// // import Tile from './components/Tile';
// // import Button from './components/Button'
// // import AppBar from './components/AppBar'
// import '../App.css'
// import Announcement from './Announcement';
// import Tile from './Tile';
// import Button from './Button'
// import AppBar from './AppBar'


// class Example extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       gameBoard : [
//         ' ',' ',' ',
//         ' ',' ',' ',
//         ' ',' ',' '
//       ],
//       turn : 'x',
//       winner : null,
//       maxPlayer : 'x',
//       minPlayer : 'o',
//     }

//   }

//   //Tie Decider
//   tie(board){
//     var moves = board.join('').replace(/ /g,'');
//     if(moves.length === 9){
//       return true;
//     }
//     return false;
//   }

//   //Winner Decider
//   winner (board,player){
//     if(
//       (board[0] === player && board[1] === player && board[2] === player ) ||
//       ( board[3] === player && board[4] === player && board[5] === player ) ||
//       ( board[6] === player && board[7] === player && board[8] === player ) ||
//       ( board[0] === player && board[3] === player && board[6] === player ) ||
//       ( board[1] === player && board[4] === player && board[7] === player ) ||
//       ( board[2] === player && board[5] === player && board[8] === player ) ||
//       ( board[0] === player && board[4] === player && board[8] === player ) ||
//       ( board[2] === player && board[4] === player && board[6] === player )
//     ){
//       return true;
//     }else{
//       return null;
//     }
//   }

//   copyBoard(board){
//     return board.slice(0);
//   }

//   //Checking Valid Move
//   validMove (move,player,board){
//      var newBoard = this.copyBoard(board);
//      if(newBoard[move] === ' '){
//        newBoard[move] = player;
//        return newBoard;
//      }else {
//        return "null";
//      }
//   }

//   //Finding Ai Move
//   findAiMove (board){
//     var bestMoveScore = 100;
//     let move = null;

//     if(this.winner(board,'x') || this.winner(board,'o') || this.tie(board)){
//       return null;
//     }
//     for(var i=0;i < board.length;i++){
//       let newBoard = this.validMove(i,this.state.minPlayer,board);
      
//       if(newBoard){
//         var moveScore = this.maxScore(newBoard);
//         if(moveScore < bestMoveScore){
//           bestMoveScore = moveScore;
//           move = i;
//         }
//       }
//     }
//     return move;
//   }

//   //Min Score Player
//   minScore (board){
//     if(this.winner(board,'x')){
//       return 10;
//     }
//     else if(this.winner(board,'o')){
//       return -10
//     }
//     else if(this.tie(board)){
//       return 0
//     }
//     else{
//       var bestMoveValue = 100;
//       for(var i=0;i<board.length;i++){
//         let newBoard = this.validMove(i,this.state.minPlayer,board);
//         if(newBoard){
//           var predictedMoveValue = this.maxScore(newBoard);
//           if(predictedMoveValue < bestMoveValue){
//             bestMoveValue =predictedMoveValue;
//           }
//         }
//       }
//       return bestMoveValue;
//     }
//   }

//   //Max Score Player
//   maxScore (board){
//     if(this.winner(board,'x')){
//       return 10;
//     }
//     else if(this.winner(board,'o')){
//       return -10
//     }
//     else if(this.tie(board)){
//       return 0
//     }
//     else{
//       var bestMoveValue = -100;
//       for(var i=0;i<board.length;i++){
//         let newBoard = this.validMove(i,this.state.maxPlayer,board);
//         if(newBoard){
//           var predictedMoveValue = this.minScore(newBoard);
//           if(predictedMoveValue > bestMoveValue){
//             bestMoveValue =predictedMoveValue;
//           }
//         }
//       }
//       return bestMoveValue;
//     }
//   }

//   //Game Loop Function
//   gameLoop (move) {
//       let player = this.state.turn;
//       let currentGameBoard = this.validMove(move,player,this.state.gameBoard);
//       console.log(currentGameBoard)
//       if(this.winner(currentGameBoard,player)){
//         this.setState({
//           gameBoard : currentGameBoard,
//           winner : player,
//         });
//         return
//       }
//       if(this.tie(currentGameBoard)){
//         this.setState({
//           gameBoard : currentGameBoard,
//           winner : 'd'
//         });
//         return
//       }
//       player = 'o';
//       currentGameBoard = this.validMove(this.findAiMove(currentGameBoard),player,currentGameBoard);
//       if(this.winner(currentGameBoard,player)){
//         this.setState({
//           gameBoard : currentGameBoard,
//           winner : player
//         });
//         return
//       }
//       if(this.tie(currentGameBoard)){
//         this.setState({
//           gameBoard : currentGameBoard,
//           winner : 'd',
//         });
//         return
//       }
//       this.setState({
//         gameBoard : currentGameBoard
//       })
//   }

//   //Reset Game Func
//   ResetBoard = () => {
//       this.setState({
//         gameBoard : [
//           ' ',' ',' ',
//           ' ',' ',' ',
//           ' ',' ',' '
//         ],
//         turn : 'x',
//         winner : null,
//         maxPlayer : 'x',
//         minPlayer : 'o',
//       })
//   }


//   render() {
  
//     return (
//       <div className="container">
//       <div className="menu">
//       <AppBar/>
//       <h2>Player 1's Turn</h2>
//       <p>Please click/tap on tile</p>
      
//       <Button reset={this.ResetBoard}/>
//       <Announcement winner={this.state.winner}/>
//       </div>
//       {this.state.gameBoard.map((value,index)=>{
//         return(
//           <Tile 
//           key={index}
//           loc={index}
//           value={value}
//           gameLoop={this.gameLoop.bind(this)}
//           />
//         )
//       })}
      
//       </div>
//     );
//   }
// }

// export default Example;
