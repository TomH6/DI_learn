import React from 'react';
import './App.css';
import User from './components/User';
import 'tachyons'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      users: []
    }
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data=>{
      this.setState({users:data})
    })
    .catch(e=>{
      console.log(e);
    })
  }
  handleClick =()=> {

  }
  render(){
    const {users} = this.state;
    console.log(users);
    return(
      <div className="App">
        <header className="App-header">
        <button onClick={this.handleClick}>Click Me!</button>
        <div>
         {
            users.map((item,i)=>{
              return(
                <User user={item} key={i}/>
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
