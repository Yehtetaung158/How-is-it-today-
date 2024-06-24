import React from 'react'

const CurrentLoader = () => {
  return (
    
<div role="status" className="w-full animate-pulse">
  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5" />
  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5" />
  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5" />
  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]" />
  <span className="sr-only">Loading...</span>
  <div>
  <div className="flex items-center justify-between">
    <div>
      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5" />
      <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
    </div>
    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12" />
  </div>
  <div className="flex items-center justify-between pt-4">
    <div>
      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5" />
      <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
    </div>
    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12" />
  </div>
  <span className="sr-only">Loading...</span>
</div>

</div>
  )
}

export default CurrentLoader