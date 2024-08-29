// src/pages/CompareProducts.js
import React from 'react';
import ComparePage from '../components/ComparePage';

const CompareProducts = ({ compareList,
    removeFromCompare}) => {
    const comparedProducts = []; // Replace with actual compared products state

    return (
        <div className="ml-64 pt-16">
            {console.log("here")}
            <ComparePage comparedProducts={compareList} removeFromCompare={removeFromCompare} />
        </div>
    );
};

export default CompareProducts;
