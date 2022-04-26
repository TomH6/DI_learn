import React from 'react';
import './App.css';
import User from './components/User';
import SearchBox from './components/SearchBox';
import {connect} from 'react-redux';
import 'tachyons';
import { changeSearchText } from './redux/actions';

class App extends React.Component {
  constructor(){
  super();
  this.state = {
    users: [],
    // searchText: ''
  }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data=>{
      this.setState({users: data})
    })
    .catch(e=>{
      console.log(e);
    })
  }
  // handleChange =(e)=>{
  //     console.log(e.target.value);
  //     this.setState({searchText:e.target.value})
  // }
  render(){
    const {users} = this.state;
    const {searchText} = this.props;
    console.log(users);
    console.log('searchText: ', searchText);

    const filterUsers = users.filter(item=>{
      return item.name.toLowerCase().includes(searchText.toLowerCase())
    })
    return(
      <div className="App">
        <header className="App-header">
          <SearchBox handle={this.props.onChange} />
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