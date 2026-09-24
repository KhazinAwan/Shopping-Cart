import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CartCard from "../components/CartCard";

function Cart() {

    const { cart } = useContext(CartContext);

    return (

        <main className="flex flex-1 flex-wrap justify-center items-start gap-8 px-4 py-8 ">

        {cart.map((item) => (

        <CartCard key={item.id} item={item} />

        ))}

        </main>
    );
}

export default Cart;