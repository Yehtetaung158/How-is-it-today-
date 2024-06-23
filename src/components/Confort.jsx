import React from "react";

const Confort = ({current}) => {
  // const currentCity=item.filter((cn)=>cn.city_name=city_name)
  // console.log(item);
  return (
    <div className=" w-full">
      <h1 className=" text-white text-xl mb-2">Confort Level</h1>
      <div className=" bg-secondary p-2 rounded-lg flex flex-row justify-between w-full text-white">
        <div className=" flex gap-4 flex-col ">
          <h1 className=" text-xl">Homidity</h1>
          <h1 className=" text-4xl">{current.rh}%</h1>
        </div>
        <div className=" flex gap-4 flex-col">
          <h1 className=" text-xl">Feels like {current.app_temp}°</h1>
          <h1 className=" text-xl">{current.wind_spd}</h1>
        </div>
      </div>
    </div>
  );
};

export default Confort;
