import React from 'react';
import Square from './Square';


class Board extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			squares: Array(9).fill(null),
			isXNext: true
		};
	}

	componentDidMount(){
		console.log('mount')
	}
	componentDidUpdate() {
		console.log('update')
	}




	handleClick = (i) =>{
		const hasValue = !!this.state.squares[i];
		const winner =calculateWinner(this.state.squares);

		if (hasValue || winner) return;

		const squares = [...this.state.squares];

		squares[i] = this.state.isXNext ? 'X': 'O';
		this.setState(state => ({
			squares, 
			isXNext: !this.state.isXNext
		}));
	}


    renderSquare(i) {
		return (<Square 
		value={this.state.squares[i]} 
		handleClick={() => this.handleClick(i)}
		/>
		)
    }

    render() {

		const winner =calculateWinner(this.state.squares);
		const status = winner ? `winner:${winner}` :`next player: ${this.state.isXNext ? 'X' : 'O'}`;
	

        return (
			<div>
				<div className="status">{status}</div>
						<div className="board-row">
							{this.renderSquare(0)}
							{this.renderSquare(1)}
							{this.renderSquare(2)}

						</div>
						<div className="board-row">
							{this.renderSquare(3)}
							{this.renderSquare(4)}
							{this.renderSquare(5)}
						</div>
						<div className="board-row">
							{this.renderSquare(6)}
							{this.renderSquare(7)}
							{this.renderSquare(8)}
						</div>
				
			</div>
		);
	}

}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


export default Board;