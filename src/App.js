import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function App() {
  const [x,X]=useState([{}]);
  useEffect(()=>{
    xAPI()
  },[])
  const xAPI=()=>{
    axios.get("https://jafardarwesh.github.io/my_api/data.json").then((resp)=>{
      X(resp.data)
      console.log('====================================');
      console.log(resp.data);
      console.log('====================================');
    }).catch((error)=>console.log(error))
  }
  return (
    <div>
    {
      x.map(i=>{
        return <p>{i.id} -- {i.name}</p>
      })
    }
    </div>
  )
}
