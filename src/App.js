
import React, { useState } from 'react';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import Layout from './compons/Layout/Layout';
import Home from './compons/Home/Home';

import NotFound from './compons/NotFound/NotFound';
import Login from './compons/Login/Login';
import Register from './compons/Register/Register';
import Products from './compons/Products/Products';
import jwtDecode from 'jwt-decode';
import Pc from './compons/Pc/Pc';
import Browser from './compons/Browser/Browser';
import ReleaseData from './compons/Release-data/Release-data';
import Alphabetical from './compons/Alphabetical/Alphabetical';
import Popularity from './compons/Popularity/Popularity';
import Relevance from './compons/Relevance/Relevance';
import Getdata from './compons/Getdata/Getdata';
import { Ccp } from './Context/Cartcontext';
import Prorouter from './compons/Prorouter/Prorouter';


export default function App() {

  let [Tokendata, setHambozo] = useState(null);
  function Hambozo(){
    let tokens = localStorage.getItem('userToken');
    let finaltoken = jwtDecode(tokens);
     setHambozo(finaltoken)
  }
  let router = createHashRouter([
    {path:'',element:<Layout Tokendata={Tokendata}/>,children:[
      {index:true,element:<Login sentdata={Hambozo}/>},
      {path:'Home',element:<Prorouter><Home/></Prorouter>},
      {path:'Pc',element:<Prorouter><Pc/></Prorouter>},
      {path:'Browser',element:<Prorouter><Browser/></Prorouter>},
      {path:'Relevance',element:<Prorouter><Relevance/></Prorouter>},
      {path:'Popularity',element:<Prorouter><Popularity/></Prorouter>},
      {path:'Alphabetical',element:<Prorouter><Alphabetical/></Prorouter>},
      {path:'Release-data',element:<Prorouter><ReleaseData/></Prorouter>},
      {path:'ALL/:id',element:<Prorouter><Getdata/></Prorouter>},
      {path:'Browser/:id',element:<Prorouter><Getdata/></Prorouter>},
      {path:'Pc/:id',element:<Prorouter><Getdata/></Prorouter>},
      {path:'Relevance/:id',element:<Prorouter><Getdata/></Prorouter>},
      {path:'Alphabetical/:id',element:<Prorouter><Getdata/></Prorouter>},
      {path:'Release-data/:id',element:<Prorouter><Getdata/></Prorouter>},
      {path:'Popularity/:id',element:<Prorouter><Getdata/></Prorouter>},
      {path:'Products/:id',element:<Prorouter><Getdata/></Prorouter>},
      {path:'Register',element:<Register/>},
      {path:'Login',element:<Login sentdata={Hambozo}/>},
      {path:'Products',element:<Prorouter><Products/></Prorouter>},
      {path:'*',element:<NotFound/>},
    ]}
  ])

  return <Ccp>
    <RouterProvider router={router}></RouterProvider>
  </Ccp>

  

}
