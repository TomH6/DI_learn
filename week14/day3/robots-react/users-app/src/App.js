import './App.css';
import React from 'react';
import User from './components/User';
import users from './users.json';
import 'tachyons';

// function App() {
//   console.log(users);
//   return (
//     <div className="App">
//       <header className="App-header">
//        {
//          users.map(item => {
//            return(
//                <User user={item} key={item.id} />
//            )
//          })
//        }
//       </header>
//     </div>
//   );
// }

 //** SAME AS ABOVE BUT AS CLASS COMPONENT */

class App extends React.Component {
  constructor(){
  super()
  }
  render(){
    return(
    <header className="App-header">
          {
        users.map(item => {
          return(
              <User user={item} key={item.id} />
          )
        })
      }
    </header>
    )
  }
}
export default App;

