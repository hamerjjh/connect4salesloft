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
        });
      }
      switchPlayer() {
        return (this.state.currentPlayer === this.state.player1) ? this.state.player2 : this.state.player1;
      }
      componentWillMount() {
        this.initBoard();
      }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Board;