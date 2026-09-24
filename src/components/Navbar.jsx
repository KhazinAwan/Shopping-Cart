import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router";

function Navbar() {

    const {cart} = useContext(CartContext);

    return(

        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>

            <ul>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
            </ul>

            <ul>
                <li>
                    <Link to="/cart">Cart {cart.reduce((total, product) => total + product.quantity, 0)}</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
