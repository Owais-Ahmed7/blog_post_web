import { useState } from "react";
import "./navbar.css";
//toggle icons
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from "react-redux";

const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  const user = useSelector((state) => state.user);
  console.log("registered user in navbar", user);

  function toggleHandle() {
    setToggle(!toggle);
    console.log(toggle)
  }

  return (
      <div className="container">
        <nav className="navbar-items">
            <h1 className="navbar-brand"><a href="/">Medium</a></h1>
            <div onClick={toggleHandle} className="menu-icon">
              {!toggle ? <MenuIcon /> : <CloseIcon />}
            </div>
            <ul className={toggle ? 'nav-menu-active' : 'nav-menu'}>
              { !user.length 
              ? <>
                <li><a className="nav-links" href="/sign-in">Login</a></li>
                <li><a className="nav-links" href="/sign-up">Register</a></li>
                </>
              : null  
              }
            </ul>
            { user.length ? <div className="avatar">{(user.charAt(0)).toUpperCase()}</div> : null }
        </nav>
      </div>  

  )
}

export default Navbar;