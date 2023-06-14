import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';


export default function Getdata() {
  let {id} =useParams()
  let [product,setproduct] = useState([]);
  
  const options = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
    params: {id: `${id}`},
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
    <div className="col col-md-5 col-12 p-3">
      <div className="boxs">
        <img className='w-100' height={'350px'} src={product.thumbnail} alt=''/>
        <div className="text p-3">
        </div>
      </div>
    </div>
    <div className="col col-md-7 col-12 p-3 ">
      <div className="boxs">
        <div className="text">
          <h6>{product.title}</h6>
          <p className=''>{product.description}</p>
          <p className=''>developer : <span className='text-danger ms-2'>{product.developer}</span></p>
          <p className=''>freetogame_profile_url : <a className='text-danger ms-2' href={product.freetogame_profile_url}>{product.freetogame_profile_url}</a></p>
          <p className=''>game_url : <a className='text-danger ms-2' href={product.game_url}> {product.game_url}</a></p>
          <p className=''>genre : <span className='text-danger ms-2'>{product.genre}</span></p>
        </div>
      </div>
    </div>
  </div>
  </>
}












