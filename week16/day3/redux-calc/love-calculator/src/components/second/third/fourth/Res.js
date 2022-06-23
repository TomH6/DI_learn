
const Res = (props) => {
  return(
    <>
      Results:
      <div>{props.results.fname} & {props.results.sname}</div>
      <div>percentage: {props.results.percentage}</div>
      <div>result: {props.results.result}</div>
    </>
  )
}

export default Res;
