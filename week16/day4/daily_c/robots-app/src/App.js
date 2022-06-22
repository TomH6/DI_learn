import React, { useEffect, useState, useContext } from 'react';
import './App.css';
import User from './components/User';
import SearchBox from './components/SearchBox';
import {connect} from 'react-redux';
import 'tachyons';
import { changeSearchText } from './redux/actions';

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchText, setSearchTxt] = useState('');
  const [filterUsers, setFilterUsers] = useState([]);
  useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data=> {
        setUsers(data)
      }) 
      .catch(e=>{
        console.log(e);
      })
    
  },[])
  
  useEffect(()=>{
    const filter = users.filter(item=>{
      return item.name.toLowerCase().includes(searchText.toLowerCase())
    })
    setFilterUsers(filter);
  },[searchText])
     
    return(
      <div className="App">
        <header className="App-header">
          <SearchBox setSearchTxt={setSearchTxt}/>
          <div>
            {
              filterUsers.map((item, i)=>{
                return(
                 <User user={item} key={i} /> 
                )
              })
            }
          </div>
          
        </header>
      </div>
    
    )
}

const mapStateToProps = (state) => {
  return{
    searchText: state.searchText
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    onChange: (e) => dispatch(changeSearchText(e.target.value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);