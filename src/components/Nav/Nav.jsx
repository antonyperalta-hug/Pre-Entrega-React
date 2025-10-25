import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import "./Nav.css";
import logo from "../../../public/images/logo.jpg";


export const Nav = () => {
    const { getTotalItems } = useCartContext();

    return (
        <nav className="navbar">
            <div className="nav-logo">
                <Link to="/">
                    <img src={logo}  alt="Logo"/>
                </Link>
            </div>
            <ul className="nav-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/category/dulce">Pastelería</Link>
                </li>
                <li>
                    <Link to="/category/salado">Panadería</Link>
                </li>
                <li className="cart-link">
                    <Link to="/cart">Carrito</Link>
                    {getTotalItems() > 0 && (
                        <span className="in-cart">{getTotalItems()}</span>
                )}
                </li>
            </ul>
        </nav>
    );
};