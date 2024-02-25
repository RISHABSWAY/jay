import React from "react";
import './homepage.css';
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";


const Homepage = () => {
  return (
    <>
      <Navbar2 />
      <body>
        <div className="aboutus">
        <h3>About Us</h3>
          Welcome to Giriraj Exports, where tradition meets craftsmanship in the
          world of copper, brass, and bronze utensils. With a legacy spanning
          over 50 years, our roots trace back to the quaint town of Viramgam,
          Gujarat, where our first shop opened its doors. We have been dedicated to providing quality
          kitchenware that not only stands the test of time but also reflects
          the rich heritage of Indian craftsmanship. Our journey began with a
          passion for preserving the artistry of copper, brass, and bronze
          utensils, and over the years, we have become synonymous with
          authenticity and excellence. At Giriraj Exports, each piece tells a
          story – a story of meticulous craftsmanship, attention to detail, and
          a commitment to quality that has been passed down through generations.
          We take pride in offering a wide range of
          utensils, from timeless classics to modern designs, catering to the
          diverse needs and tastes of our valued customers. Whether you are a
          seasoned chef, a home cook, or someone who appreciates the beauty of
          well-crafted kitchenware, Giriraj Exports has something to offer for
          everyone. As we continue to grow and evolve, our commitment to
          excellence remains unwavering. We invite you to explore our collection
          and experience the elegance, durability, and charm that our copper,
          brass, and bronze utensils bring to your kitchen. Thank you for being
          a part of our journey, and we look forward to serving you for many
          more years to come.
        </div>
        <hr></hr>
        <div className="flex">
        <div className="category">
          
          <p>Copper Utensils</p>
        </div>
        <div className="category">
          <p>Brass Utensils</p>
        </div>
        <div className="category">
          <p>Bronze Utensils</p>
        </div>
        <div className="category">
          <p>Puja Utensils</p>
        </div>
        <div className="category">
          <p>Statue</p>
        </div>
        </div>
      </body>
      <Footer/>
    </>
  );
};

export default Homepage;
