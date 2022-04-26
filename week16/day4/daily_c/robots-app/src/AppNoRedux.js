import './App.css';
import React from 'react';
import Search from './components/Search';
import User from './components/User';
import 'tachyons';

class App extends React.Component {
  constructor(){
  super()
  this.state = {
    users: [],
    searchText: ''
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
  handleChange =(e)=>{
      console.log(e.target.value);
      this.setState({searchText:e.target.value})
  }
  render(){
    const {users, searchText} = this.state;

    const filterUsers = users.filter(robot=>{
      return robot.name.toLowerCase().includes(searchText.toLowerCase())
    })
    return(
      <div className="App">
        <header className="App-header">
          <Search handle={this.handleChange} />
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

export default App;