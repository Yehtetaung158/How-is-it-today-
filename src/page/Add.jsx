import React, { useEffect, useState } from "react";
import { useGetCurrentByCityMutation } from "../store/service/endpiont/weatherendpoint";
import { useNavigate } from "react-router-dom";
import CityTable from "../components/CityTable";
import Swal from "sweetalert2";

const Add = () => {
  const [currentfun, { isError, isLoading, data }] =
    useGetCurrentByCityMutation();

    function showAlert() {
      Swal.fire({
        text: 'Require correct input',
        confirmButtonColor: '#d33',
        background: '#f3f4f4',
      })}

  const currentData = data?.data[0];
  const nav = useNavigate();
  const [input, setInput] = useState("");
  const [rs, setRs] = useState(false);
  const inputHandle = (e) => setInput(e.target.value);
  const addHandle = async () => {
    currentfun(input);
    setInput("");
    setRs(!rs);
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
  const deletefun = (deleteCity) => {
    const currentCity = citydata.findIndex((i) => deleteCity === i.city_name);
    // console.log(currentCity);
    citydata.splice(currentCity, 1);
    localStorage.setItem("myArray", JSON.stringify(citydata));
    setRs(!rs);
    setInput("");
  };
  console.log(citydata.length);
  useEffect(() => {
    if (currentData) {
      addObjectToLocalStorage(currentData);
      setRs(!rs);
    }
  }, [data]);
  return (
    <div className=" max-w-3xl mx-auto ">
      <div className=" flex justify-center items-center my-2">
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
          className="bg-gray-50 border mx-3 border-gray-300 text-gray-900 text-sm  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
      {isError && showAlert() }
      <div className="overflow-x-auto sm:mx-2 sm:my-2 md:mx-4 md:my-4 lg:mx-6 lg:my-6 xl:mx-8 xl:my-8 2xl:mx-10 2xl:my-10 sm:px-2 md:px-4 lg:px-6 xl:px-8 2xl:px-10">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-4 md:px-6">
                CITY
              </th>
              <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-4 md:px-6">
                WEATHER
              </th>
              <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-4 md:px-6">
                TEMPERATURE
              </th>
              <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-4 md:px-6">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {!isLoading && (
              <tr className={`${citydata.length === 0 ? "" : "hidden"} `}>
                <td
                  colSpan={4}
                  className={`table-cell-4 text-center text-gray-600 w-full m-auto`}
                >
                  <img
                    className="w-[200px] m-auto"
                    src="img/Empty street-rafiki.svg"
                    alt=""
                  />
                  <p>There is no List</p>
                </td>
              </tr>
            )}
            <>
              {isLoading ? (
                <tr>
                  <td
                    colSpan={4}
                    className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900 sm:px-4 md:px-6"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5" />
                        <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                      </div>
                      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12" />
                    </div>
                  </td>
                </tr>
              ) : (
                <>
                  <CityTable citydata={citydata} deletefun={deletefun} />
                </>
              )}
            </>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Add;
