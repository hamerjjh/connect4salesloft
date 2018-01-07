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
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Board;