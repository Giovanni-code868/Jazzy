import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Product from "../components/Product";
import Footer from "../layouts/Footer";


const Home = () => {
  useEffect(() => {
    document.title = "Home page";
  });
  return (
    <>
      <main className="container">
        <Hero />
        <Product />
      

        
        



      </main>
    </>
  );
};

export default Home;
