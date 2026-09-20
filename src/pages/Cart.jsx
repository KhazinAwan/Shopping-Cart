import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CartCard from "../components/CartCard";

function Cart() {

    const { cart } = useContext(CartContext);

    return (

        <main>

        {cart.map((item) => (

        <CartCard key={item.id} item={item} />

        ))}

        </main>
    );
}

export default Cart;