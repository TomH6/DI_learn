//** THE CLASS WAY **//

import React from "react"; // only for class components

class User extends React.Component{
    constructor(){
        super();
        this.state = {
            chamionships: "2"
        }
    }
    componentDidMount(){
        this.setState({chamionships:"3"});
    }
    render(){
        const {chamionships} = this.state;
        // const {name, last_name, jersy} = this.props; // If we want to DESTRUCT
        return(
            // This is how we get props data in A class component
            <> 
              {/* {name} DESTRUCTED   */}
              {this.props.name}
              <br/> 
              {/* {last_name} DESTRUCTED */}
              {this.props.last_name}
              <br/>
              {/* {jersy} DESTRUCTED */}
              {this.props.jersy}
              <br/>
              <p>Chamionships: {chamionships}</p>   
            </>
        )
    }
}


//** THE FUNCTION WAY **//

// const User = (props) =>{
//     return(
//         <>
//             {props.name}
//         </>
//     )
// }



export default User;
