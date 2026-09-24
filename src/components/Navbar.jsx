import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router";

function Navbar() {

    const {cart} = useContext(CartContext);

    return(

        <nav className="flex justify-between p-5 bg-gray-800 text-white">
            <ul>
                <li>
                    <Link to="/" className="hover:underline hover:decoration-amber-400 hover:underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-4 focus-visible:ring-offset-gray-800">Home</Link>
                </li>
            </ul>

            <ul className="flex gap-8">
                <li>
                    <Link to="/shop" className="hover:underline hover:decoration-amber-400 hover:underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-4 focus-visible:ring-offset-gray-800">Shop</Link>
                </li>

                <li>
                    <Link to="/cart" className="hover:underline hover:decoration-amber-400 hover:underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-4 focus-visible:ring-offset-gray-800">Cart {cart.reduce((total, product) => total + product.quantity, 0)}</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
