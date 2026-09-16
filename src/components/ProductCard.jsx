function ProductCard({product}) {

    return(

        <article>

            <h2>{product.title}</h2>

            <img src={product.image} alt={product.title} />

            <p>{product.price}</p>

            <div>

                <button type="button">-</button>
                <input type="number" min={1} defaultValue={1}/>
                <button type="button">+</button>
                
            </div>

            <button type="button">Add ot Cart</button>

        </article>

    );

}

export default ProductCard;