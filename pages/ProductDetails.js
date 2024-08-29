
import React from 'react';
import ProductTable from '../components/ProductTable';

const ProductDetails = ({ addToCompare, compareList }) => {
    return (
        <div>
            <ProductTable addToCompare={addToCompare} compareList={compareList} />
        </div>
    );
};

export default ProductDetails;
