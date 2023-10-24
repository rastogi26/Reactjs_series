import React, { useEffect, useState } from 'react'

const Github = () => {
 const [data,setData]= useState([])
  useEffect(()=>{
    fetch('https://api.github.com/users/rastogi26')
    .then(response=> response.json())
    .then(data=>{
        console.log(data);
        setData(data)
    })
  },[])
  return (
    <div className=" text-center  text-white text-3xl  m-4 p-4  bg-gray-600">
       Github Follwers:{data.followers} 
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  );
}

export default Github
