
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ProductDetails from './pages/ProductDetails';
import CompareProducts from './pages/CompareProducts';

function App() {
    const [compareList, setCompareList] = useState([]);

    const addToCompare = (product) => {
        if(compareList.length >=4)
            return;
        if (compareList.some(item => item.id === product.id)) return; // Avoid duplicates
        setCompareList([...compareList, product]);
    };

    const removeFromCompare = (id) => {
        setCompareList(compareList.filter(item => item.id !== id));
    };
    console.log(compareList);
    return (
        <Router>
            <div className="app">
                <Navbar />
                <Sidebar />
                <div className="ml-64 pt-16">
                    <Routes>
                        <Route
                            path="/"
                            element={<ProductDetails addToCompare={addToCompare} compareList={compareList} />}
                        />
                        <Route
                            path="/compare"
                            element={
                                <CompareProducts
                                    compareList={compareList}
                                    removeFromCompare={removeFromCompare}
                                />
                            }
                        />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
