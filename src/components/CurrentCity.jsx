import React from 'react'

const CurrentCity = ({city_name,temp,description}) => {
  return (
    <div className=' flex flex-col items-center space-y-2 p-2 w-full'>
         <h1 className=' text-3xl font-bold text-white'>{city_name}</h1>
         <h1 className=' text-[100px] text-white'> {temp} °</h1>
         {/* <h1 className=' text-xl font-bold text-white'><span>35°</span> / <span>27°</span></h1> */}
         <h1 className=' text-xl font-bold text-white'>{description}</h1>
    </div>
  )
}

export default CurrentCity