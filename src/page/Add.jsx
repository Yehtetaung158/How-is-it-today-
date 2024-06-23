import React, { useEffect, useState } from "react";
import { useGetCurrentByCityMutation } from "../store/service/endpiont/weatherendpoint";
import { useNavigate } from "react-router-dom";

const Add = () => {

    const [currentfun, { isError, isLoading, data }] =
    useGetCurrentByCityMutation();
  const currentData = data?.data[0];
  const nav=useNavigate();
  const [input, setInput] = useState("");
  const [rs, setRs] = useState(false);
  const inputHandle = (e) => setInput(e.target.value);
  const addHandle = async () => {
    currentfun(input);
    setInput("")
    setRs(!rs)
  };

  function addObjectToLocalStorage(newObject) {
    console.log("added to local");
    let array = localStorage.getItem("myArray");
    array = array ? JSON.parse(array) : [];
    array.push(newObject);
    const updatedArray = JSON.stringify(array);
    localStorage.setItem("myArray", updatedArray);
  }
  const citydata = JSON.parse(localStorage.getItem("myArray"));
  const deletefun=(deleteCity)=>{
    const currentCity= citydata.findIndex((i)=>(
        deleteCity === i.city_name
    ))
    console.log(currentCity)
    citydata.splice(currentCity,1)
    localStorage.setItem("myArray", JSON.stringify(citydata));
    setRs(!rs)
    setInput("")
}

  useEffect(() => {
    if (currentData) {
      addObjectToLocalStorage(currentData);
    setRs(!rs)
    }
  }, [data]);
  return (
    <div>
      <div className=" flex justify-center items-center">
        <button
          onClick={() => nav("/")}
          type="button"
          className="py-2.5 px-5  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Home
        </button>
        <input
           value={input}
           // value={input}
           onChange={inputHandle}
          type="text"
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Add City"
          required
        />
        <button
            onClick={addHandle}
          type="button"
          className="py-2.5 px-5  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          ADD
        </button>
      </div>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                City
              </th>

              <th scope="col" className="px-6 py-3">
                Weather
              </th>
              <th scope="col" className="px-6 py-3">
                Temperature
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          {citydata?.map((i,index) => (
          <tbody key={index}>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {i.city_name}
              </th>
              <td className="px-6 py-4">
              <img  className=" w-10"
                    src={`https://cdn.weatherbit.io/static/img/icons/${i.weather.icon}.png`}
                    // alt=""
                  />
              </td>
              <td className="px-6 py-4">{i.temp}° C</td>
              <td className="px-6 py-4">
              <button onClick={deletefun}>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4 text-red-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
              </td>
            </tr>
          </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Add;
