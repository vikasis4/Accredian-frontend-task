import React from 'react';
import heroImage from '../pic/pic2.png';


const Header = ({ openModal }) => {
    return (
        <section className="bg-gradient-to-r flex justify-around items-center from-blue-500 to-purple-600 text-white text-center py-10">
            <div className="">
                <h1 className="text-7xl font-bold mb-4">Let's Learn & Earn</h1>
                <p className="text-2xl mb-8">Get a chance to win up to Rs. 15,000</p>
                <button
                    onClick={openModal}
                    className="bg-white text-blue-500 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100"
                >
                    Refer Now
                </button>
            </div>
            <img src={heroImage} alt="Hero" className="rounded-lg shadow-md" height={200} width={600} />
        </section>
    );
};

export default Header;
