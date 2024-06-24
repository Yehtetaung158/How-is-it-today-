import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useGetByCityHourlyMutation,
  useGetCurrentByCityMutation,
} from "../store/service/endpiont/weatherendpoint";
import TodayWeather from "../components/TodayWeather";
import HomeNavBar from "../components/HomeNavBar";
import Current from "../components/Current";
import Homidity from "../components/Homidity";
import CurrentLoader from "../components/CurrentLoader";
import Swal from "sweetalert2";

const Home = () => {
  const [hourlyFun, weatherHourly] = useGetByCityHourlyMutation();
  const [currentlyFun, weatherCurrently] = useGetCurrentByCityMutation();
  const hourly = weatherHourly.data?.data;
  const current = weatherCurrently.data?.data[0];
  const isLoading=weatherHourly?.isLoading;
  const isError=weatherHourly?.isError;
  function showAlert() {
    Swal.fire({
      text: "Smething is wrong",
      confirmButtonColor: "#d33",
      background: "#f3f4f4",
    });
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasFetched, setHasFetched] = useState(false);

  const [input, setInput] = useState("Yangon");
  const inputHandle = (e) => setInput(e.target.value);

  const addedCity = JSON.parse(localStorage.getItem("myArray"));
  const items = [{ city_name: input }, ...addedCity];

  useEffect(() => {
    if (!hasFetched && currentIndex === 0 && items) {
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
    <div className="max-w-3xl mx-auto px-4 py-2">
      {isError && showAlert()}
      <HomeNavBar
        hourlyFun={hourlyFun}
        currentlyFun={currentlyFun}
        setHasFetched={setHasFetched}
        setInput={setInput}
        input={input}
        inputHandle={inputHandle}
      />
      {isLoading ? <CurrentLoader/> : <><Current current={current}/>      
      <TodayWeather hourly={hourly} />
      <Homidity current={current}/></>}
      <button
        onClick={goToPrevious}
        className="absolute text-2xl top-1/2 left-0 transform -translate-y-1/2  text-gray-500 px-4 py-2 "
      >
        ❮
      </button>
      <button
        onClick={goToNext}
        className="absolute text-2xl top-1/2 right-0 transform -translate-y-1/2  text-gray-500 px-4 py-2 "
      >
        ❯
      </button>
    </div>
  );
};

export default Home;
