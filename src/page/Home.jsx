import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useGetByCityHourlyMutation,
  useGetCurrentByCityMutation,
} from "../store/service/endpiont/weatherendpoint";
import TodayWeather from "../components/TodayWeather";

const Home = () => {
  const [hourlyFun, weatherHourly] = useGetByCityHourlyMutation();
  const [currentlyFun, weatherCurrently] = useGetCurrentByCityMutation();
  const hourly = weatherHourly.data?.data;
  const current = weatherCurrently.data?.data[0];

//   console.log(hourly);
  console.log(current);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasFetched, setHasFetched] = useState(false);

  const nav = useNavigate();
  const items = JSON.parse(localStorage.getItem("myArray"));

  useEffect(() => {
    if (!hasFetched && currentIndex === 0) {
      hourlyFun(items[0].city_name);
      currentlyFun(items[0].city_name);
      setHasFetched(true);
    }
  }, [currentIndex, items, hasFetched]);

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + items.length) % items.length;
    setCurrentIndex(newIndex);
    const currentCityName = items[newIndex].city_name;
    hourlyFun(currentCityName);
    currentlyFun(currentCityName);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(newIndex);
    const currentCityName = items[newIndex].city_name;
    hourlyFun(currentCityName);
    currentlyFun(currentCityName);
  };
  return (
    <div>
      <div className=" flex">
        <input
          type="text"
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search City"
          required
        />
        <button
          onClick={() => nav("/add")}
          type="button"
          className="py-2.5 px-2 w-[150px]  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          ADD City
        </button>
      </div>

      <div className=" flex flex-col items-center space-y-2 p-2 w-full">
        <h1 className=" text-3xl font-bold text-gray-500">{current?.city_name}</h1>
        <h1 className=" text-[50px] text-gray-500"> {current?.temp} °C</h1>
        <h1 className=" text-xl font-bold text-gray-500">{current?.weather.description}</h1>
      </div>
      <TodayWeather hourly={hourly}/>
      <div className=" flex  justify-between items-center border-2 px-4 py-6">
        <div >
            <h1 className=" text-2xl font-bold">Homidity</h1>
            <h1 className=" text-lg">{current?.rh}%</h1>
        </div>
        <div>
            <h1>{current?.wind_spd}</h1>
            <h1>{current?.wind_cdir_full}</h1>
        </div>
      </div>
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-0 transform -translate-y-1/2  text-gray-500 px-4 py-2 "
      >
        ❮
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2  text-gray-500 px-4 py-2 "
      >
        ❯
      </button>
    </div>
  );
};

export default Home;
