import React from 'react';
import './App.css';
import User from './components/User';
import Searchbox from './components/SearchBox';
import 'tachyons';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      users: [],
      searchText : ""
    }
    // this.handleClick = this.handleClick.bind(this);
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
  // handleChange =(e)=> {
  //   // console.log(e.target.value);
  //   this.setState({searchText : e.target.value});
  // }
  handleClick =(val)=>{
    this.setState({searchText : val})
  }
  render(){
    const {users, searchText} = this.state;
    // console.log("searchText:", searchText);
    const filterUser = users.filter(item =>{
      return item.name.toLowerCase().includes(searchText.toLowerCase());
    })
    return(
      <div className="App">
        <header className="App-header">
        <Searchbox handleClick={this.handleClick} />
        <div>
         {
            filterUser.map((item,i)=>{
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
