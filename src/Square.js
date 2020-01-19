import React from 'react';

 class Square extends React.Component {
    // state = { value: ''};
    constructor(props) {
        super(props);
        this.state = { value: null};
    }

    render() {
        return (

        <button className="square" 
        onClick={() =>{
            this.props.handleClick();
        }}>
            {this.props.value}
        </button>
        );
    }
};

export default Square;

