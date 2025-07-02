import Link from "next/link";
import React from "react";

const RegisterPage = () => {
  return (
    <form className="w-1/2 lg:w-1/4 mx-auto mt-10  bg-gray-100 p-5 rounded ">
      <h2 className="text-lg font-semibold text-center">Register Page</h2>
      <label htmlFor="Username">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
          {" "}
          Username{" "}
        </span>

        <input
          type="text"
          id="Username"
          placeholder="Enter your username"
          className="mt-5 w-full rounded border-gray-300 p-2 shadow-sm sm:text-sm dark:border-gray-600 dark:bg-gray-900 dark:text-white"
        />
      </label>

      <label htmlFor="Email" className="mt-3">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
          {" "}
          Email{" "}
        </span>

        <input
          type="email"
          id="Email"
          placeholder="Enter your email"
          className="mt-5 w-full rounded border-gray-300 p-2 shadow-sm sm:text-sm dark:border-gray-600 dark:bg-gray-900 dark:text-white"
        />
      </label>

      <label htmlFor="password" className="mt-3">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
          {" "}
          Password{" "}
        </span>

        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          className=" outline-nones w-full rounded border-gray-300 shadow-sm p-2 sm:text-sm dark:border-gray-600 dark:bg-gray-900 dark:text-white mt-5"
        />
      </label>
      <button
        type="submit"
        className="mt-5 w-full bg-gray-700 text-white py-2 rounded hover:bg-gray-800 transition-colors"
      >
        Register
      </button>
      <p className="mt-5 text-center text-sm text-gray-600 dark:text-gray-400">
        have an account?{" "}
        <Link
          href="/Login"
          className="font-medium text-blue-700 dark:text-blue-800 hover:underline"
        >
          Login
        </Link>
      </p>
    </form>
  );
};

export default RegisterPage;
