import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';
const Github = () => {
    const data = useLoaderData();
    // const [data, setData]  = useState('');
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/ayesharashid11')
    //     .then(res => res.json())
    //     .then(data => {console.log(data); setData(data)})
    // },[])
  return (
    <div>
      Github Followers: {data.followers}
    
    </div>
  )
}

export default Github;

export const gitHubLoader = async () =>{
    const res = await fetch('https://api.github.com/users/ayesharashid11');
   const data= await res.json();
   console.log(data);
   return data;
}
