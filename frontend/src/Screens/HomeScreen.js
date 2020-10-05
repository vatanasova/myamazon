import React from "react";
import productsData from '../productsData';
import { Link } from 'react-router-dom';

function HomeScreen(props) {
    return (
        <ul className="products">
            {
                productsData.products.map(product => <li>
                    <div className="product">
                        <Link to={'/product/' + product._id}>
                            <img className="product-image" src={product.image} alt="product" />
                            <div className="product-name">
                                {product.name}
                            </div>
                        </Link>
                        <div className="product-brand">{product.brand}</div>
                        <div className="product-price">${product.price}</div>
                        <div className="product-rating">{product.rating} Stars ({product.numReviews} Reviews)</div>
                    </div>
                </li>)
            }
        </ul>
    )
}

export default HomeScreen;
