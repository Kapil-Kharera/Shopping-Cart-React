import React, {  useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const url = "https://fakestoreapi.com/products?limit=8";
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <h1>All Products</h1>
            <div id="shopping-page">
                {
                    products.map((product) => {
                        return <ProductCard product={product} />
                    })
                }
            </div>
        </>
    )
}

export default AllProducts;