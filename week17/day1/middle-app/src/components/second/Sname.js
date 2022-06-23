import Calc from './third/Calc'

const Sname = (props) => {
  return(
    <>
      Second Name: <input type='text' name='sname' onChange={props.handleChange}/>
      <Calc handleClick={props.handleClick}
            results={props.results}
       />
    </>
  )
}

export default Sname
