import {Link} from 'react-router-dom';
const Nav =(props) => {
    return(
        <>
           <Link to='/'>Home</Link> |
           <Link to='/about'>About</Link> |
           <Link to='/contact'>Contact</Link>
        </>
    )
}
export default Nav;