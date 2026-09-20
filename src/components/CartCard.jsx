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

    return (

        <article>

            <h2>{item.title}</h2>

            <img src={item.image} alt={item.title} />


            <div>

                <button type="button" onClick={() => updateQuantity(item.quantity - 1)} >-</button>

                <input type="number" min={1} value={item.quantity} onChange={(event) => updateQuantity(Number(event.target.value))} />

                <button type="button" onClick={() => updateQuantity(item.quantity + 1)}>+</button>

            </div>

            <p>{item.price}</p>


            <button type="button">Remove from Cart</button>

        </article>

    );

}

export default CartCard;