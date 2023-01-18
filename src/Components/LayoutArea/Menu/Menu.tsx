import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">

            {/* Home Route */}
            <NavLink to="/">Home</NavLink>

            {/* Products Page */}
            <NavLink to="/products">Products</NavLink>

            <NavLink to="/categories">Categories</NavLink>

            {/* About Page */}
            <NavLink to="/about">About</NavLink>

            <NavLink to="/contact-us">Contact Us</NavLink>

        </div>
    );
}

export default Menu;
