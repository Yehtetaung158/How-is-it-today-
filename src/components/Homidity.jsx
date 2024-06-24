import React from 'react'

const Homidity = ({current}) => {
  return (
    <>
    <div className=" flex mb-8  justify-between items-center border-2 px-4 py-6">
        <div>
          <h1 className=" text-2xl font-bold">Homidity</h1>
          <h1 className=" text-lg">{current?.rh}%</h1>
        </div>
        <div>
          <h1>{current?.wind_spd}</h1>
          <h1>{current?.wind_cdir_full}</h1>
        </div>
      </div>
      <div className=" flex  justify-between items-center border-2 px-4 py-6">
        <div>
          <h1 className=" text-2xl font-bold">Sun</h1>
          <h1 className=" text-lg">Sun Rise - {current?.sunrise}</h1>
          <h1 className=" text-lg">Sun Set - {current?.sunset}</h1>
        </div>
      </div>
    </>
  )
}

export default Homidity