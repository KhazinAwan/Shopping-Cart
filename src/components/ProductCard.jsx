function ProductCard() {

    return(

        <article>

            <h2>Product Name</h2>

            <img src="" alt="Product image" />

            <p>$4.00</p>

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