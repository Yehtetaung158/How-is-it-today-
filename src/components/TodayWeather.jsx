import React from "react";

const TodayWeather = ({hourly}) => {
  // console.log(hourly)
  return (
    <div className=" w-full">
      {/* <ScrollArea> */}
      <div
        className=" border-2 py-2 px-2 rounded-lg flex flex-row gap-4 text-gray-500 text-xl mb-8 overflow-auto items-center justify-center "
        style={{
          scrollbarWidth: "none" /* Firefox */,
          msOverflowStyle: "none" /* Internet Explorer 10+ */,
        }}
      >
        <style>
          {`
            /* WebKit */
            .overflow-auto::-webkit-scrollbar {
              width: 0;
              height: 0;
            }
          `}
        </style>
        {hourly ? (
          <>
            {hourly?.map((i, index) => (
                <div key={index} className=" flex flex-col gap-4 px-2 m-2 text-sm">
                  <h1>{i.datetime.slice(11, 14)}:00</h1>
                  <img
                    src={`https://cdn.weatherbit.io/static/img/icons/${i.weather.icon}.png`}
                    // alt=""
                  />
                  <h1>{i.temp}° </h1>
                </div>
            ))}
          </>
        ) : (
          <div className=" flex flex-col gap-4 px-2 text-sm">
            <h1 className=" m-8">Loading ....</h1>
          </div>
        )}
      </div>
      {/* </ScrollArea> */}
    </div>
  );
};

export default TodayWeather;
