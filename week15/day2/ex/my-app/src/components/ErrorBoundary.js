import React from "react";

class ErrorBoundary extends React.Component{
  constructor(){
    super();
    this.state = {
      error: null,
      errorInfo: null
    }
  }
  componentDidCatch(error,errorInfo){
    this.setState({error:error, errorInfo:errorInfo})
  }
  render(){
    console.log(this.state.error,this.state.errorInfo);
    if(this.state.error)
      return(
        <>
        <h3>I can not count that high!</h3>
        </>  
      )
      return this.props.children // You Will Not render What ever is wrapped inside without this return
    }
    
  
}
export default ErrorBoundary