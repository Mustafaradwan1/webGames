/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Products() {
  let [product,setproduct] = useState([]);
  const options = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
    params: {platform: 'pc'},
    headers: {
      'X-RapidAPI-Key': '9bcdd598ddmsh68d0bee69604048p131e2bjsna9c243487919',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
  async function getapi(){
    let {data} = await axios.request(options)
    setproduct(data)
  }
  useEffect(()=>{
    getapi()
  },[])
  return <>
  <div className="row m-0">
      {product.map((pro)=> <div key={pro.id} className="col col-md-4 col-12 p-3">
        <Link to={`/Products/${pro.id}`}>
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

