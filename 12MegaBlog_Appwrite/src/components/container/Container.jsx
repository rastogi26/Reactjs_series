import React from 'react'

//used for styling component

function Container({children}) {
  return <div className=' w-full  max-w-7xl mx-auto py-4'> {children} </div>;
  
}

export default Container
