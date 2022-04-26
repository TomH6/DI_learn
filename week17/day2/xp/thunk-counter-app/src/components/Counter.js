import React from "react";
import { connect } from 'react-redux';
import {add, sub} from '../redux/actions';

class Counter extends React.Component {
    
    render(){

        const addIfOdd = () => {
            if (this.props.count%2) 
                {this.props.add()}    
        }

        const addAsync = () => {
            setTimeout(() => {
                this.props.add()
              }, 1000
            )
        }

        return(
            <>
                <div>{this.props.count}</div>
                <div>
                    <button onClick={this.props.add}>+</button>
                    <button onClick={this.props.sub}>-</button>
                    <div>
                        <button onClick={addIfOdd}>Add if Odd</button>
                    </div>
                    <button onClick={addAsync}>Add Async</button>
                    
                </div>
            </>   
        )
    }
} 
const mapStateToProps = (state) => {
    return{
        count: state.count
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        add: ()=> dispatch(add()),
        sub: ()=> dispatch(sub())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);