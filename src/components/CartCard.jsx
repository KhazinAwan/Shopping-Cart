import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

function CartCard({ item }) {

    const { cart, setCart } = useContext(CartContext);

    function updateQuantity(newQuantity) {

        if(newQuantity < 1) return;

        const updatedCart = cart.map((product) => (

            product.id === item.id
                ? { ...product, quantity: newQuantity }
                : product 

        ));

        setCart(updatedCart);

    }

    function removeFromCart() {

        const updatedCart = cart.filter((product) => product.id !== item.id);

        setCart(updatedCart);

    }

    return (

        <article className="flex w-full max-w-80 flex-col gap-5 rounded-lg border-3 border-gray-400 p-6">

            <h2 className="text-lg font-semibold text-center">{item.title}</h2>

            <img src={item.image} alt={item.title} className="h-48 w-full object-contain" />

            <p className="text-xl font-bold text-gray-800 ">Total Price: ${item.price*item.quantity}</p>

            <div className="flex items-center gap-2">

                <p className="text-xl font-bold text-gray-800 pr-4">Quantity: </p>

                <button type="button" aria-label="Decrease quantity" className="rounded-md border border-gray-400 px-3 py-1 hover:bg-gray-100" onClick={() => updateQuantity(item.quantity - 1)} >-</button>

                <input type="number" min={1} value={item.quantity} className="w-16 rounded-md border border-gray-400 px-2 py-1 text-center" onChange={(event) => updateQuantity(Number(event.target.value))} />

                <button type="button" aria-label="Increase quantity" className="rounded-md border border-gray-400 px-3 py-1 hover:bg-gray-100"onClick={() => updateQuantity(item.quantity + 1)}>+</button>

            </div>

            <button type="button" className="rounded-md bg-amber-500 px-4 py-2 font-semibold text-white hover:bg-amber-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-offset-2 active:scale-95 active:bg-amber-700" onClick={ removeFromCart }>Remove from Cart</button>

        </article>

    );

}

export default CartCard;