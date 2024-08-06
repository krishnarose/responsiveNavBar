import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-gray-700 mb-6">
          Oops! The page you are looking for does not exist.
        </p>
        <Link to="/">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
