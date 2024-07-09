import React from 'react';

const MiddleSection = () => {
  return (
    <div className="bg-blue-50 py-12">
      <div className="container mx-auto flex justify-center">
        <nav className="bg-white rounded-full shadow-md px-6 py-2">
          <ul className="flex space-x-6">
            <li><a href="#" className="text-blue-600 font-semibold">Refer</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-600">Benefits</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-600">FAQs</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-600">Support</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MiddleSection;
