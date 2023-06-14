import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom';
export default function Browser() {
  let [product,setproduct] = useState([]);

  const options = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
    params: {platform: 'browser'},
    headers: {
      'X-RapidAPI-Key': '9bcdd598ddmsh68d0bee69604048p131e2bjsna9c243487919',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
  
  async function getapi(){
    let {data} = await axios.request(options)
    console.log(data)
    setproduct(data)
  }
  useEffect(()=>{
    getapi()
  },[])

  return <>
  <div className="row all m-0 bg-dark">
      {product.map((pro)=> <div key={pro.id} className="col col-md-4 col-6 p-3">
      <Link to={`/Browser/${pro.id}`}>
        <div className="box">
          <img className='w-100' src={pro.thumbnail} alt=''/>
          <div className="text p-3">
          <h6 className='mt-2'>{pro.title.split(" ",3).join(" ")}</h6>
          <p className=''>{pro.short_description.split("",20).join("")} . . .</p>
          </div>
        </div>
        </Link>
      </div>)}
  </div>
  </>
}










