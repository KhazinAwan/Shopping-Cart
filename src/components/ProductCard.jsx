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
                        "category": product.category,
                        "image": product.image,
                        "quantity": quantity,
                    }
                ]
            )
    }
}

return (

    <article className="flex w-full max-w-80 flex-col gap-5 rounded-lg border-3 border-gray-400 p-6">

        <h2 className="text-lg font-semibold text-center">{product.title}</h2>

        <img src={product.image} alt={product.title} className="h-48 w-full object-contain"/>

        <p className="text-xl font-bold text-gray-800">Price: ${product.price}</p>

        <div className="flex items-center gap-2">

            <p className="text-xl font-bold text-gray-800 pr-4">Quantity: </p>

            <button type="button" aria-label="Decrease quantity" className="rounded-md border border-gray-400 px-3 py-1 hover:bg-gray-100" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
            <input type="number" min={1} value={quantity} className="w-16 rounded-md border border-gray-400 px-2 py-1 text-center" onChange={(event) => setQuantity(Number(event.target.value))} />
            <button type="button" aria-label="Increase quantity" className="rounded-md border border-gray-400 px-3 py-1 hover:bg-gray-100" onClick={() => setQuantity(quantity + 1)}>+</button>

        </div>

        <button type="button" className="rounded-md bg-amber-500 px-4 py-2 font-semibold text-white hover:bg-amber-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-offset-2 active:scale-95 active:bg-amber-700" onClick={addToCart} >Add to Cart</button>

    </article>

);

}

export default ProductCard;