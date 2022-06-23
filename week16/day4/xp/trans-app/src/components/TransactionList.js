import React from "react";
import TransactionForm from "./TransactionForm";
// import {addToLocalStorage, getFromLocalStorage} from '../utils/storage';
import {connect} from 'react-redux';
import {updateIndex_trx, delete_trx} from '../redux/actions';

class TransactionList extends React.Component{
    constructor(){
        super();
        //** WITHOUT REDUX **/
        // this.state = {
        //     list: getFromLocalStorage('trxes'),
        //     currentIndex: -1,
        //     trx: {}
        // }
    }   
    //**WITHOUT REDUX **/
    // handleEdit = (indx) => {
    //     const {list} = this.state;
    //     this.setState({trx: list[indx], currentIndex:indx});
    // }
    //**WITHOUT REDUX **/
    // handleDelete = (indx) => {
    //     const {list} = this.state;
    //     list.splice(indx,1);
    //     addToLocalStorage('trxes', list)
    //     this.setState({list:[...list], currentIndex:-1})
    // }
    //**WITHOUT REDUX **/
    // handleInsert = (trxObj) => {
    //     const {list} = this.state;
    //     list.push(trxObj);
    //     addToLocalStorage('trxes', list)
    //     this.setState({list:[...list], currentIndex:-1})
    // }
    //**WITHOUT REDUX **/
    // handleUpdate = (trx) => {
    //     const {list, currentIndex} = this.state;
    //     list[currentIndex] = trx;
    //     addToLocalStorage('trxes', list)
    //     this.setState({list:[...list], currentIndex:-1, trx:{}})
    // }

    render(){
        const {list, currentIndex, trx} = this.props
        return(
            <>
            <TransactionForm 
                //**WITHOUT REDUX **/ 
                // handleInsert={this.handleInsert}
                // currentIndex={currentIndex}
                // handleUpdate={this.handleUpdate}
                // trx={trx}
            />
              <h2>Transaction List</h2>
                    {
                      list.map((item, i) => {
                        return(
                            <div className="parent">
                                <div key={i} className='dflex'>
                                    <div className="box">{item.accountNumber}</div>
                                    <div className="box">{item.FSC}</div>
                                    <div className="box">{item.name}</div>
                                    <div className="box">{item.amount}</div>
                                    <div><button onClick={()=> this.props.handleEdit(i)}>EDIT</button></div>
                                    <div><button onClick={()=> this.props.handleDelete(i)}>DELETE</button></div>
                                </div>
                            </div>
                        ) 
                    })}
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        list: state.list,
        currentIndex: state.currentIndex
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        handleEdit: (index)=> dispatch(updateIndex_trx(index)),
        handleDelete: (index)=> dispatch(delete_trx(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);

//**WITHOUT REDUX **/
// export default TransactionList;