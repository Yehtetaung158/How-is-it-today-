import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomeNavBar = ({
  hourlyFun,
  currentlyFun,
  setHasFetched,
  setInput,
  input,
  inputHandle
}) => {
    const nav=useNavigate();
    const [isSearch, setIsSearch] = useState(false);
  // const [input,setInput]=useState("Yangon");
  console.log(input)

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          hourlyFun(input);
          currentlyFun(input);
          setHasFetched(true);
          setIsSearch(!isSearch);
        }}
        className="min-w-full divide-y divide-gray-200 flex gap-2 justify-end"
      >
        {isSearch ? (
          <>
            <button
              onClick={() => {
                setIsSearch(!isSearch);
              }}
              type="button"
              className="py-2.5 px-2 w-[150px]  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Cancel
            </button>
            <input
              value={input}
              onChange={inputHandle}
              type="text"
              id="first_name"
              className="bg-gray-50 border mx-3 border-gray-300 text-gray-900 text-sm  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Add City"
              required
            />
            <button
              type="submit"
              className="py-2.5 px-2 w-[150px]  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Search
            </button>
          </>
        ) : (
          <button
          onClick={() => {
            setIsSearch(!isSearch);
          }}
            type="button"
            className="py-2.5 px-2  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        )}
        {!isSearch && (
          <button
            onClick={() => nav("/add")}
            type="button"
            className="py-2.5 px-2 w-[150px]  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            ADD City
          </button>
        )}
      </form>
    </>
  );
};

export default HomeNavBar;
