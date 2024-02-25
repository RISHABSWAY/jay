import React from 'react'
import './Cp.css'
import Navbar2 from './Navbar2'

function Cp() {
  return (
    <>
    <Navbar2/>
      <div className="copper">
        <div className="heading">
          <h3>Copper Utensils</h3>
        </div>
        <div className="info">
          <p>
            Copper has been revered for centuries for its numerous health
            benefits. Not only does it add a touch of sophistication to your
            kitchenware.
          </p>
        </div>
        <hr />
        <div className="cat">
          <div className="buttons">
          <button>All</button>
          <button> Bottle</button>
          <button> Water Container</button>
          <button> Bedroom Pot</button>
          <button> Water Jug Set</button>
          <button> Water Glass Set</button>
          </div>
        </div>
        <hr />
        <div className="container">
          <div className="card1">
          <div className="card">
          <div className="bottle">
            <img src='CB-1.png' alt='CopperBottle'/>
          </div>
          <div className="card-content">
            <h3>Antique Copper</h3>
          </div>
          </div>
          <div className="card">
          <div className="bottle">
            <img src='CB-1.png' alt='CopperBottle'/>
          </div>
          </div>
          <div className="card">
          <div className="bottle">
            <img src='CB-1.png' alt='CopperBottle'/>
          </div>
          </div>
          <div className="card">
          <div className="bottle">
            <img src='CB-1.png' alt='CopperBottle'/>
          </div>
          </div>
          <div className="card">
          <div className="bottle">
            <img src='CB-1.png' alt='CopperBottle'/>
          </div>
          </div>
        </div>
        </div>
        <div className="card2">
        <div className="card">
          <div className="bottle">
            <img src='CB-1.png' alt='CopperBottle'/>
          </div>
          <div className="card-content">
            <h3>Antique Copper</h3>
          </div>
          </div>
          <div className="card">
          <div className="bottle">
            <img src='CB-1.png' alt='CopperBottle'/>
          </div>
          </div>
          <div className="card">
          <div className="bottle">
            <img src='CB-1.png' alt='CopperBottle'/>
          </div>
          </div>
          <div className="card">
          <div className="bottle">
            <img src='CB-1.png' alt='CopperBottle'/>
          </div>
          </div>
          <div className="card">
          <div className="bottle">
            <img src='CB-1.png' alt='CopperBottle'/>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cp