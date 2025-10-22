import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import "./Nav.css";

export const Nav = () => {
    const { getTotalItems } = useCartContext();

    return (
        <nav className="navbar">
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