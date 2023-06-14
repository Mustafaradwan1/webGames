import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar({Tokendata}) {
  let nav = useNavigate()
  function Delatelocal(){
    localStorage.removeItem('userToken')
    nav('/Login')
  }
  return <>
  <nav className="navbar navbar-expand-sm navbar-light bg-dark">
      <div className="container">
      <Link className="navbar-brand text-white" to="/Home">Navbar</Link>
      <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        {Tokendata !== null ?         <ul className="navbar-nav me-auto w-75 mt-2 mt-lg-0 ul">
          <li className="nav-item">
            <Link className="nav-link active" to="Home">Home</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="Platforms" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Platforms</Link>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <Link className="dropdown-item" to="Pc">Pc</Link>
              <Link className="dropdown-item" to="Browser">Browser</Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="Sort-by" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort-by</Link>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <Link className="dropdown-item" to="release-data">release-data</Link>
              <Link className="dropdown-item" to="popularity">popularity</Link>
              <Link className="dropdown-item" to="alphabetical">alphabetical</Link>
              <Link className="dropdown-item" to="relevance">relevance</Link>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="Carts">Carts</Link>
          </li>
        </ul>: null}
        <ul className="navbar-nav ul justify-content-end w-100 me-0 w-25">
          {Tokendata === null ? <>
            <li className="nav-item">
            <Link className="nav-link active" to="Login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="Register">join free</Link>
          </li>
          </>: 
          <li className="nav-item">
            <Link className="nav-link active" onClick={Delatelocal} to="/">Logout</Link>
          </li>}

        </ul>

      </div>
    </div>
  </nav>
  
  </>
}
