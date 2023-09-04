import { NavLink, Outlet } from "react-router-dom";

function Nav() {
    return (
        <div className="grid-box">
            <nav>
                <NavLink to={'/Gallery'} className='navigation'><i className="arrow left" /> Gallery</NavLink>
                <NavLink to={'/Favorites'} className='navigation'><i className="arrow left" /> Favorites</NavLink>
            </nav>
            <Outlet />
        </div>
    );
}

export default Nav