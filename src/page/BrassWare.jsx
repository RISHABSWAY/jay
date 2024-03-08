import React from 'react'
import { Link } from "react-router-dom"
import p2 from '../assets/p2.jpg'

function BrassWare() {
  return (
    <>
    <div className="container">
        <div className="card">
          <Link to="/SpiceBox" style={{ textDecoration: "none" }}>
            <img src={p2} alt="ed"></img>
            <p>Spice box</p>
          </Link>
        </div>
        <div className="card">
          <Link to="/BGlass" style={{ textDecoration: "none" }}>
            <img src={p2} alt="ed"></img>
            <p>BGLASS</p>
          </Link>
        </div>
        <div className="card">
          <Link to="/BjugSet" style={{ textDecoration: "none" }}>
            <img src={p2} alt="ed"></img>
            <p>BJuge</p>
          </Link>
        </div>
        <div className="card">
          <Link to="/Lota" style={{ textDecoration: "none" }}>
            <img src={p2} alt="ed"></img>
            <p>Lota</p>
          </Link>
        </div>
        <div className="card">
          <Link to="/Mukwass" style={{ textDecoration: "none" }}>
            <img src={p2} alt="ed"></img>
            <p>Mukawass</p>
          </Link>
        </div>
      </div>

    </>
  )
}

export default BrassWare