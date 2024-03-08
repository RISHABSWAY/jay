import React from 'react'
import { Link } from "react-router-dom"
import p2 from '../assets/p2.jpg'

function BronzeWare() {
  return (
    <>
    <div className="container">
        <div className="card">
          <Link to="/Bowl" style={{ textDecoration: "none" }}>
            <img src={p2} alt="ed"></img>
            <p>Bowl</p>
          </Link>
        </div>
        <div className="card">
          <Link to="/BrGlass" style={{ textDecoration: "none" }}>
            <img src={p2} alt="ed"></img>
            <p>BrGLASS</p>
          </Link>
        </div>
        <div className="card">
          <Link to="/Spoon" style={{ textDecoration: "none" }}>
            <img src={p2} alt="ed"></img>
            <p>Spoon</p>
          </Link>
        </div>
        <div className="card">
          <Link to="/Thali" style={{ textDecoration: "none" }}>
            <img src={p2} alt="ed"></img>
            <p>Thali</p>
          </Link>
        </div>
        <div className="card">
          <Link to="/DinnerSet" style={{ textDecoration: "none" }}>
            <img src={p2} alt="ed"></img>
            <p>DinnerSet</p>
          </Link>
        </div>
      </div>
    </>
  )
}

export default BronzeWare