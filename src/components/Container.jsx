import React from 'react'

const Container = ({children}) => {
  return (
    <div className=' container flex justify-center items-center'>
        {children}
    </div>
  )
}

export default Container