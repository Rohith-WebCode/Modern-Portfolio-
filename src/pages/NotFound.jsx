import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4 relative">
      <h1 className="text-[11rem] sm:text-[20rem] md:text-[30rem] font-extrabold text-gray-700 opacity-65 select-none leading-none z-0">
        404
      </h1>
      <p className="text-3xl md:text-5xl text-neutral-50 font-extrabold absolute bottom-[18rem] py-2 z-10">
        Page not found
      </p>
      <p className="text-[#afb0b6] text-base py-2 z-10">
        Found, this page is not. Far, far away, it must be.
      </p>
      <Link
        to="/"
        className="text-[#afb0b6] hover:underline cursor-pointer z-10"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
