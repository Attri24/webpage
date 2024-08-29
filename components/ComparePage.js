import React from 'react';

const ComparePage = ({ comparedProducts, removeFromCompare }) => {
    return (
        <div className="relative top-12 -ml-56 -mt-28  p-4 bg-white">
            <h1 className="text-2xl font-bold mb-4">Compare Products</h1>
            {comparedProducts.length < 2 ? (
                <p>Select at least 2 products to compare.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 border-b border-gray-300">Attribute</th>
                                {comparedProducts.map((product, index) => (
                                    <th key={product.id} className="px-4 py-2 border-b border-gray-300">
                                        {product.title}
                                        <button
                                            onClick={() => removeFromCompare(product.id)}
                                            className="ml-2 text-red-500 text-sm"
                                        >
                                            Remove
                                        </button>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 border-b border-gray-300">Price</td>
                                {comparedProducts.map((product, index) => (
                                    <td key={`${product.id}-price`} className="px-4 py-2 border-b border-gray-300">
                                        ${product.price}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border-b border-gray-300">Discount</td>
                                {comparedProducts.map((product, index) => (
                                    <td key={`${product.id}-discount`} className="px-4 py-2 border-b border-gray-300">
                                        {product.discountPercentage}%
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border-b border-gray-300">Brand</td>
                                {comparedProducts.map((product, index) => (
                                    <td key={`${product.id}-brand`} className="px-4 py-2 border-b border-gray-300">
                                        {product.brand}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border-b border-gray-300">Category</td>
                                {comparedProducts.map((product, index) => (
                                    <td key={`${product.id}-category`} className="px-4 py-2 border-b border-gray-300">
                                        {product.category}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border-b border-gray-300">Description</td>
                                {comparedProducts.map((product, index) => (
                                    <td key={`${product.id}-description`} className="px-4 py-2 border-b border-gray-300">
                                        {product.description}
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default ComparePage;
