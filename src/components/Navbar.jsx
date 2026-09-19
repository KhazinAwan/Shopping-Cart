import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

function Navbar() {

    const {cart} = useContext(CartContext);

    return(

        <nav>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
            </ul>

            <ul>
                <li>
                    <a href="/shop">Shop</a>
                </li>
            </ul>

            <ul>
                <li>
                    <a href="/cart">Cart {cart.reduce((total, product) => total + product.quantity, 0)}</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
