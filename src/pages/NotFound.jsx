import React from 'react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-red-500">Oops! Page Not Found</h1>
      <p className="text-gray-700 mt-4">
        The page you're looking for doesn't seem to exist. Maybe you mistyped the URL?
      </p>
      <a href="/" className="text-blue-500 underline mt-6">Go back to Home</a>
    </div>
  );
};

export default NotFound;
