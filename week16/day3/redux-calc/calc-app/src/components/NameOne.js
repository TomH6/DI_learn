import { connect } from "react-redux";
import { setNames } from "../redux/actions";
import NameTwo from "./NameTwo";


const Fname = (props) => {
    return(
        <>
        Enter A Name: <input type='text' name="fname" onChange={props.handleChange}/>
        <NameTwo />
        </>
    )
}
const mapDispatchToProps = (dispatch)=> {
    return{
        handleChange: (e)=> dispatch("SET_FNAME", setNames(e.target.value))
    }
}
export default connect(null, mapDispatchToProps)(Fname);