import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Square from './Square';
import Board from './Board';

function App() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    <div className="game-info">
      <div>Game info goes here</div>
      <ol></ol>
    </div>


    </div>
  );
}

export default App;
