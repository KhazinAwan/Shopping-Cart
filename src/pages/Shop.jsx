import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";


function Shop() {

    const[products, setProducts] = useState([]);

    useEffect(() => {

        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then((data) => setProducts(data));

    }, []);

    return (

        <main>

        {products.map((product) => (

            <ProductCard key={product.id} product={product}/>

        ))}

        </main>


    );
}

export default Shop;