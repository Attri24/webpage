
import React, { useState } from 'react';

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-blue-500 dark:bg-gray-900 p-4 shadow-md z-10">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-bold">MyApp</div>
                <div className="flex items-center">
                    
                    <button
                        onClick={toggleDarkMode}
                        className="ml-4 text-white bg-gray-800 dark:bg-gray-700 p-2 rounded"
                    >
                        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
