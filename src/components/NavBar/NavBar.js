import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to='/home'>Home</Link>
      <Link to='/register'>Register</Link>
      <Link to='/login'>Login</Link>
      <Link to='/joke'>Joke</Link>

      {/* this route should eventually check if user is admin to be visible. */}
      <Link to='/admin'>Admin</Link>
    </div>
  );
};

export default NavBar;