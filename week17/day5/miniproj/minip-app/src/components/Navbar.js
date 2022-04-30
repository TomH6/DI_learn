import React from 'react';
import { Link } from "react-router-dom";

const navbar= () =>{
  
  return (
    <nav>
    <div class="nav-wrapper red darken-3">
    <><Link to="/home">My Blog</Link></>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contacts</Link></li>
      </ul>
    </div>
  </nav>
  );
}
export default navbar;