function CartCard() {

    return (

        <article>

            <h2>Product Name</h2>

            <img src="" alt="Product image" />


            <div>

                <button type="button">-</button>
                <input type="number" min={1} defaultValue={1} />
                <button type="button">+</button>

            </div>

            <p>$4.00</p>


            <button type="button">Remove from Cart</button>

        </article>

    );

}

export default CartCard;