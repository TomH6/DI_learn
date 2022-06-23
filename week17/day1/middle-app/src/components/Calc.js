import React from 'react';
import Res from './Res'
import {connect} from 'react-redux';
import {fetchResults} from '../redux/actions'

const Calc = (props) =>  {

  return(
     <>
       <button onClick={props.fetchResults}>Click</button>
       <Res />
     </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return{
    fetchResults: ()=> dispatch(fetchResults())
  }
}

export default connect(null,mapDispatchToProps)(Calc);
