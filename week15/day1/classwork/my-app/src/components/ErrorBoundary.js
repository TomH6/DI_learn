import React from 'react';

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
      errorInfo: null
    }
  }
  componentDidCatch(error,errorInfo){
    this.setState({error:error ,errorInfo:errorInfo})
  }
  render(){
    console.log(this.state.error,this.state.errorInfo);
    if(this.state.error){
      return(
        <>
        <h2>Somthing went wrong please try again in few minutes...</h2>
        </>
      )
    }
    return this.props.children
  }
}
export default ErrorBoundary
