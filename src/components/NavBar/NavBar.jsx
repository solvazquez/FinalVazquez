import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"
import Logo from '../Img/logo.png'

const NavBar = () => {
  
  return (
    <header>
        <Link to={"/"}>
          <img className="imgLogo" src={Logo} alt="Logo Libreria" />
        </Link>

        <nav>
            <ul>
                <li>
                  <NavLink className="categoria" activeClassName="active" to={"/categoria/2"}> Fantasía </NavLink>
                </li>

                <li>
                  <NavLink className="categoria" activeClassName="active" to={"/categoria/3"}> Misterio </NavLink>
                </li>

                <li>
                  <NavLink className="categoria" activeClassName="active" to={"/categoria/4"}> No Ficción </NavLink>
                </li>

            </ul>
        </nav>

        <CartWidget />

    </header>
  )
}

export default NavBar