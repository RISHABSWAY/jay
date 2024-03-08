import React from 'react'
import { Link } from "react-router-dom"
import p1 from '../assets/p1.jpg'

function CopperWare() {
  return (
    <>
    <div className="container">
        <div className="card">
          <Link to="/CopperBottle" style={{ textDecoration: "none" }}>
            <img src={p1} alt="ed"></img>
            <p>Copper Bottle</p>
          </Link>
        </div>
        <div className="card">
          <Link to="/WaterConatiner" style={{ textDecoration: "none" }}>
            <img src={p1} alt="ed"></img>
            <p>WaterConatiner</p>
          </Link>
        </div>
        <div className="card">
          <Link to="/BedRoom" style={{ textDecoration: "none" }}>
            <img src={p1} alt="ed"></img>
            <p>BedRoom</p>
          </Link>
        </div>
        <div className="card">
          <Link to="/Glass" style={{ textDecoration: "none" }}>
            <img src={p1} alt="ed"></img>
            <p>Glass</p>
          </Link>
        </div>
        <div className="card">
          <Link to="/WaterJugset" style={{ textDecoration: "none" }}>
            <img src={p1} alt="ed"></img>
            <p>WaterJugset</p>
          </Link>
        </div>
      </div>

    </>
  )
}

export default CopperWare