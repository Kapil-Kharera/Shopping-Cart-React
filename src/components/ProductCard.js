import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className='card-container'>
        <div className="img-wrapper">
            <img src={product.image} alt="product" id="product-img" />
        </div>
        <div>
            <h4 className="product-title">{product.title}</h4>
            <p className="product-price">{product.description}</p>
            <button>Add to Cart</button>
            <button>Buy</button>
        </div>
    </div>
  )
}

export default ProductCard;