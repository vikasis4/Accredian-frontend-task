import React from 'react';
import heroImage from '../pic/pic1.png'; 

const Hero = ({ openModal }) => {
    return (
        <section className="relative bg-blue-100">
            <div className="container mx-auto flex flex-col justify-center items-center py-20 px-4 md:px-0">
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl font-bold mb-4 text-center pb-8 leading-tight">
                        How Refer & Earn Works
                    </h1>
                </div>
                <div className="md:w-1/2 mt-10 md:mt-0">
                    <img src={heroImage} alt="Hero" className="max-w-full rounded-md shadow-md h-auto" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
