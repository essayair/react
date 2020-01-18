import React from 'react';

 class Square extends React.Component {

    state = { value: ''};
    // constructor(props) {
    //     super(props);
    //     this.state = { value: ''};
    // }

    handleClick = () => {
        this.setState(//不能直接改，只能通过setState修改
            (state) =>({value: this.state.value === '' ?'X':''})
            ); //异步
    }

    render() {
        return (
        <button onClick={this.handleClick} className="square">
            {this.state.value}
        </button>
        );
    }
};

export default Square;

