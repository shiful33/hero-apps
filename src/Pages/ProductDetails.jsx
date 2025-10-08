import React from 'react';
import { useParams } from 'react-router';
import useProducts from '../Hooks/useApps';

const ProductDetails = () => {
    const {id} = useParams()
    const { products } = useProducts()
    return (
        <div>
            ProductDetails
        </div>
    );
};

export default ProductDetails;