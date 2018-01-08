import React, { Component } from 'react';


class Board extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          player1: 1,
          player2: 2,
          currentPlayer: null,
          board: [],
        };
        
        // Bind play function to App component
        // this.play = this.play.bind(this);
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
        });
      }
      switchPlayer() {
        return (this.state.currentPlayer === this.state.player1) ? this.state.player2 : this.state.player1;
      }
      play(c) {
        if (!this.state.gameOver) {
          let board = this.state.board;
          for (let r = 5; r >= 0; r--) {
            if (!board[r][c]) {
              board[r][c] = this.state.currentPlayer;
              break;
            }
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