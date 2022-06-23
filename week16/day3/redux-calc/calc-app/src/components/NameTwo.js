import { connect } from "react-redux";
import { setNames } from "../redux/actions";
import Button from "./Button";



const Fname = (props) => {
    return(
        <>
        Enter A Name: <input type='text' name="sname" onChange={props.handleChange}/>
        <Button />
        </>
    )
}
const mapDispatchToProps = (dispatch)=> {
    return{
        handleChange: (e)=> dispatch("SET_SNAME",setNames(e.target.value))
    }
}
export default connect(null, mapDispatchToProps)(Fname);