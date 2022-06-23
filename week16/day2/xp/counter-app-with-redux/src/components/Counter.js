import React from 'react';
import { connect } from 'react-redux';


class Counter extends React.Component {
    increment = () => {
        this.props.dispatch({type: 'INCREASE_COUNT'});
    }
    decrement = () => {
        this.props.dispatch({type: 'DECREASE_COUNT'});
    }

    render(){
        return(
            <>
                <h3>Counter</h3>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <span>{this.props.count}</span>
                    <button onClick={this.increment}>+</button>
                </div>
                
            </>
        )
    }
     
};

const mapStateToProps = (state) => {
    return{
      count: state.count
    }
}

export default connect(mapStateToProps, null)(Counter);
