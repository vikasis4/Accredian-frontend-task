import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <h1 className="ml-2 text-xl font-bold">Accredian</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">About Us</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Contact Us</a>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-blue-600 hover:underline">Login</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Try for Free</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
