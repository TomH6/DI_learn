import Res from './fourth/Res'

const Calc = (props) => {
  return(
    <>
      <button onClick={()=>props.handleClick()}>Click</button>
      <Res results={props.results} />
    </>
  )
}


export default Calc;
