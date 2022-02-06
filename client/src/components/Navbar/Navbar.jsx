import { useState } from "react";
import MenuItems from "./MenuItems"
import "./navbar.css";
//toggle icons
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

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
              {MenuItems.map((Item, index) => {
                return (
                  <li>
                  <a 
                    className={Item.className} 
                    href={Item.url}>
                      {Item.title}
                  </a>
                  </li>
                )
              })} 
            </ul>
        </nav>
      </div>  

  )
}

export default Navbar;