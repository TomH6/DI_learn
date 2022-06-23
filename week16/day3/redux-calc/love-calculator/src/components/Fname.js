import Sname from './second/Sname'

const Fname = (props) => {
  return(
    <>
      First Name: <input type='text' name='fname' onChange={props.handleChange}/>
      <Sname handleClick={props.handleClick}
             handleChange={props.handleChange}
             results={props.results}
      />
    </>
  )
}


export default Fname
