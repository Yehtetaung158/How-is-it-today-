import React from 'react'

const Current = ({current}) => {
  return (
    <div className=" flex flex-col items-center space-y-2 p-2 w-full">
        <h1 className=" text-3xl font-bold text-gray-500">
          {current?.city_name}
        </h1>
        <h1 className=" text-[50px] text-gray-500"> {current?.temp} °C</h1>
        <h1 className=" text-xl font-bold text-gray-500">
          {current?.weather.description}
        </h1>
      </div>
  )
}

export default Current