import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = (() =>{

    return(
        <div>
            <nav className="bg-white black-80 tc pv4 avenir">
                <Link className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" to='/'>Főoldal</Link>
                <NavLink className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" to='/ermesek'>Az olimpia érmesei</NavLink>
                <NavLink className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l" to='/mermesek'>A magyar érmesek</NavLink>
            </nav>
        </div>
    )

}
)
export default Navbar