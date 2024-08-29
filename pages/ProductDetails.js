// // src/pages/ProductDetails.js
// import React, { useState } from 'react';
// import ProductTable from '../components/ProductTable';
// import CompareModal from '../components/CompareModal';

// const ProductDetails = () => {
//     const [compareList, setCompareList] = useState([]);
//     const [isModalVisible, setIsModalVisible] = useState(false);

//     const addToCompare = (product) => {
//         if (compareList.length >= 4 || compareList.some(p => p.id === product.id)) {
//             return;
//         }
//         setCompareList([...compareList, product]);
//     };

//     const removeProduct = (id) => {
//         setCompareList(compareList.filter(product => product.id !== id));
//     };

//     return (
//         <div className="ml-2 pt-2">
//             <ProductTable addToCompare={addToCompare} />
//             <CompareModal
//                 visible={isModalVisible}
//                 onClose={() => setIsModalVisible(false)}
//                 products={compareList}
//                 addToCompare={addToCompare}
//             />
//         </div>
//     );
// };

// export default ProductDetails;
// src/pages/ProductDetails.js
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
