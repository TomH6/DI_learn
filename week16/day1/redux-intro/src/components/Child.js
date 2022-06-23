import { connect } from 'react-redux';
import { changePropTwo } from '../redux/actions';

const Child = (props) => {
    
    return(
        <>
            <h1>Child Component</h1>
            <h2>{props.one}</h2>
            <h3>{props.three}</h3>
            <input type='text' onChange={props.handleInputTwo} />
        </>
    )   
};
const mapStateToProps = (state) => {
    return{
      one: state.propOne,
      
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        handleInputTwo: (e) => dispatch(changePropTwo(e.target.value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Child);