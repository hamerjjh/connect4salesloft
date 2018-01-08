import React, { Component } from 'react';


class Board extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          player1: 1,
          player2: 2,
          currentPlayer: null,
          board: [],
          endGame: false,
          message: ''
        };
        
        // Bind play function to App component
        this.play = this.play.bind(this);
      }

    initBoard() {
        let board = [];
        for (let r = 0; r < 6; r++) {
          let row = [];
          for (let c = 0; c < 7; c++) { row.push(null) }
          board.push(row);
        }
        
        this.setState({
          board,
          currentPlayer: this.state.player1,
          endGame: false,
          message: ''
        });
      }
      switchPlayer() {
        return (this.state.currentPlayer === this.state.player1) ? this.state.player2 : this.state.player1;
      }
      play(c) {
        if (!this.state.endGame) {
          let board = this.state.board;
          for (let r = 5; r >= 0; r--) {
            if (!board[r][c]) {
              board[r][c] = this.state.currentPlayer;
              break;
            }
          }
    
          // Checking wins on board
          let result = this.checkAll(board);
          if (result === this.state.player1) {
            this.setState({ board, endGame: true, message: 'Player 1 wins! Start New Game!' });
          } else if (result === this.state.player2) {
            this.setState({ board, endGame: true, message: 'Player 2 wins! Start New Game!' });
          } else if (result === 'draw') {
            this.setState({ board, endGame: true, message: "Awww it's a tie!! :(" });
          } else {
            this.setState({ board, currentPlayer: this.togglePlayer() });
          }
        } else {
          this.setState({ message: 'Game over. Time to start a new game.' });
        }
      }
      componentWillMount() {
        this.initBoard();
      }

      render() {
        return (
          <div>
            <div className="button" onClick={() => {this.initBoard()}}>New Game</div>
            
            <table>
              <thead>
              </thead>
              <tbody>
                {this.state.board.map((row, i) => (<Row key={i} row={row} play={this.play} />))}
              </tbody>
            </table>
            
            <p className="message">{this.state.message}</p>
          </div>
        );
      }
    }
    

    const Row = ({ row, play }) => {
      return (
        <tr>
          {row.map((cell, i) => <Cell key={i} value={cell} columnIndex={i} play={play} />)}
        </tr>
      );
    };
    
    const Cell = ({ value, columnIndex, play }) => {
      let color = 'white';
      if (value === 1) {
        color = 'red';
      } else if (value === 2) {
        color = 'yellow';
      }
        
      return (
        <td>
          <div className="cell" onClick={() => {play(columnIndex)}}>
            <div className={color}></div>
          </div>
        </td>
      );
    }

export default Board;