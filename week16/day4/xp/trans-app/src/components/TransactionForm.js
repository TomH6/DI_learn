import React from 'react';
import { connect } from 'react-redux';
import { insert_trx, update_trx } from '../redux/actions';

class TransactionForm extends React.Component {
  constructor(){
    super();
    this.state = {
      accountNumber: '',
      FSC: '',
      name: '',
      amount: ''
    }
  }
  handleChange =(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }
  handleSubmit =(e)=>{
    e.preventDefault();
    const {currentIndex} = this.props;
    if(currentIndex==-1) {
      this.props.handleInsert(this.state);
    } else {
      this.props.handleUpdate(this.state);
    }
    this.setState(
      {
        accountNumber: '',
        FSC: '',
        name: '',
        amount: ''
      }
    )
  }
  
  componentDidUpdate = (prevProps) => {
    if(prevProps.currentIndex != this.props.currentIndex && this.props.currentIndex!=-1) {
      const trx = this.props.list[this.props.currentIndex]
      this.setState({
                      accountNumber: trx.accountNumber || '',
                      FSC: trx.FSC || '',
                      name: trx.name || '',
                      amount: trx.amount || ''
      })
    }
  }
  render(){
    const {currentIndex} = this.props
    return (
      <div>
        <h1>Transaction Form</h1>
          <form onSubmit={this.handleSubmit}>
            <div><input 
                    type='text' 
                    value={this.state.accountNumber} 
                    onChange={this.handleChange} 
                    name='accountNumber' 
                    placeholder='Account number'/>
              </div> 
            <div><input 
                    type='text' 
                    value={this.state.FSC} 
                    onChange={this.handleChange} 
                    name='FSC' 
                    placeholder='FSC'/>
              </div>
            <div><input 
                    type='text' 
                    value={this.state.name} 
                    onChange={this.handleChange} 
                    name='name' 
                    placeholder='A/C holder name'/>
              </div>
            <div><input 
                    type='text' 
                    value={this.state.amount} 
                    onChange={this.handleChange} 
                    name='amount' 
                    placeholder='amount'/>
              </div>
            <div><input type='submit' value={currentIndex==-1?'Submit':'Update'} /></div>
        </form>
        <hr/>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return{
    currentIndex: state.currentIndex,
    list: state.list
  } 
}
const mapDispatchToProps = (dispatch) => {
  return{
    handleInsert: (trx)=>dispatch(insert_trx(trx)),
    handleUpdate: (trx)=>dispatch(update_trx(trx))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);

//**WITHOUT REDUX **/
// export default TransactionForm;