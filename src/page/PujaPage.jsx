import React from 'react'
import { Link } from "react-router-dom"
import p2 from '../assets/p2.jpg'

function PujaPage() {
  return (
    <>
    <div className="container">
        <div className="card">
          <Link to="/Diva" style={{ textDecoration: "none" }}>
            <img src={p2} alt="ed"></img>
            <p>Diva</p>
          </Link>
        </div>
        <div className="card">
          <Link to="/ArtiThali" style={{ textDecoration: "none" }}>
            <img src={p2} alt="ed"></img>
            <p>ArtiThali</p>
          </Link>
        </div>
        <div className="card">
          <Link to="/Bell" style={{ textDecoration: "none" }}>
            <img src={p2} alt="ed"></img>
            <p>Bell</p>
          </Link>
        </div>
        <div className="card">
          <Link to="/Basket" style={{ textDecoration: "none" }}>
            <img src={p2} alt="ed"></img>
            <p>Basket</p>
          </Link>
        </div>
        <div className="card">
          <Link to="/StickHolder" style={{ textDecoration: "none" }}>
            <img src={p2} alt="ed"></img>
            <p>StickHolder</p>
          </Link>
        </div>
      </div>
    </>
  )
}

export default PujaPage