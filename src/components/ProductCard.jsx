import { useState } from "react";

function ProductCard({product}) {

    const [quantity, setQuantity] = useState(1);

    return(

        <article>

            <h2>{product.title}</h2>

            <img src={product.image} alt={product.title} />

            <p>{product.price}</p>

            <div>

                <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <input type="number" min={1} value={quantity} onChange={(event) => setQuantity(Number(event.target.value))}/>
                <button type="button" onClick={() => setQuantity(quantity + 1)}>+</button>
                
            </div>

            <button type="button">Add to Cart</button>

        </article>

    );

}

export default ProductCard;