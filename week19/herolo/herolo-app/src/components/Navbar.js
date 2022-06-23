import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <>
              <Nav className="justify-content-end" activeKey="/home">
                  <div>
                    <Nav.Item>
                        <Link to="/">Home</Link>
                    </Nav.Item>
                  </div>      ||     
                  <div>
                    <Nav.Item>
                        <Link to="/favorites">Favorites</Link>
                    </Nav.Item>
                  </div>
                
               </Nav>
        </>
    )
};

export default Navbar;







