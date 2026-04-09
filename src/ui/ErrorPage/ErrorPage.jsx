import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <img src="/src/assets/App-Error.png" alt="" />
        <h1 className="text-6xl font-bold text-red-500">404</h1>

        <p className="mt-4 text-gray-600">Page Not Found</p>

        <Link
          to="/"
          className="mt-6 inline-block px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
