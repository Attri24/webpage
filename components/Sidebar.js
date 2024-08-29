import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="fixed top-2 z-index-1  h-full w-64 bg-gray-800 dark:bg-gray-900 p-6 pt-16 text-white">
            <ul>
                <li className="mb-4">
                    <Link to="/" className="hover:text-blue-400">Product Details</Link>
                </li>
                <li>
                    <Link to="/compare" className="hover:text-blue-400">Compare Products</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
