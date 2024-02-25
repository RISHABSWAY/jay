import React, {useState} from 'react'
import './Cp.css'
import Navbar2 from './Navbar2'

function Cp() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleFilter = (category) => {
    setSelectedCategory(category);
  };
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
          <button onClick={() => handleFilter('All')}>All</button>
          <button onClick={() => handleFilter('Bottle')}>Bottle</button>
          <button onClick={() => handleFilter('Water Container')}>Water Container</button>
          <button onClick={() => handleFilter('Bedroom Pot')}>Bedroom Pot</button>
          <button onClick={() => handleFilter('Water Jug Set')}>Water Jug Set</button>
          <button onClick={() => handleFilter('Water Glass Set')}>Water Glass Set</button>
          </div>
        </div>
        <hr />
        <div class="container">
  <div class="product-line">
  <div className={`product-line bottle ${selectedCategory !== 'All' && selectedCategory !== 'Bottle' ? 'hidden' : ''}`}>
      <div class="card1">

      </div>
      <div class="card1">

      </div>
      <div class="card1">

      </div>
      <div class="card1">

      </div>
      <div class="card1">

      </div>
    </div>
  </div>
  <div className="product-line">
  <div className={`product-line wat-cont ${selectedCategory === 'All' || selectedCategory === 'Water Container' ? '' : 'hidden'}`}>
      <div class="card2">

      </div>
      <div class="card2">

      </div>
      <div class="card2">

      </div>
      <div class="card2">

      </div>
      <div class="card2">

      </div>
    </div>
    </div>
    <div className="product-line">
  <div className={`product-line bedroompot ${selectedCategory === 'All' || selectedCategory === 'Bedroom Pot' ? '' : 'hidden'}`}>
      <div class="card3">

      </div>
      <div class="card3">

      </div>
      <div class="card3">

      </div>
      <div class="card3">

      </div>
      <div class="card3">

      </div>
    </div>
    </div>
    <div className="product-line">
  <div className={`product-line jug-set ${selectedCategory === 'All' || selectedCategory === 'Water Jug Set' ? '' : 'hidden'}`}>
      <div class="card4">

      </div>
      <div class="card4">

      </div>
      <div class="card4">

      </div>
      <div class="card4">

      </div>
      <div class="card4">

      </div>
    </div>
    </div>
    <div className="product-line">
  <div className={`product-line wat-glass-set ${selectedCategory === 'All' || selectedCategory === 'Water Glass Set' ? '' : 'hidden'}`}>
      <div class="card5">

      </div>
      <div class="card5">

      </div>
      <div class="card5">

      </div>
      <div class="card5">

      </div>
      <div class="card5">

      </div>
    </div>
    </div>
    
  </div>
    </>
  )
}

export default Cp