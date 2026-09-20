import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";

function ProductCard({ product }) {

    const { cart, setCart } = useContext(CartContext);

    const [quantity, setQuantity] = useState(1);

    function addToCart() {

        const existingProduct = cart.find(
            (item) => item.id === product.id
        );

        if (existingProduct) {

            const updatedCart = cart.map(

                (item) => item.id === product.id
                ? {...item, quantity: item.quantity + quantity}
                : item
            )



            setCart(updatedCart);
        }

        else {

            setCart(
                [
                    ...cart,

                    {

                        "id": product.id,
                        "title": product.title,
                        "price": product.price,
                        "category": product,category,
                        "image": product.image,
                        "quantity": quantity,
                    }
                ]
            )
    }
}

return (

    <article>

        <h2>{product.title}</h2>

        <img src={product.image} alt={product.title} />

        <p>{product.price}</p>

        <div>

            <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
            <input type="number" min={1} value={quantity} onChange={(event) => setQuantity(Number(event.target.value))} />
            <button type="button" onClick={() => setQuantity(quantity + 1)}>+</button>

        </div>

        <button type="button" onClick={addToCart} >Add to Cart</button>

    </article>

);

}

export default ProductCard;