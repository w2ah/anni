import React from "react";
import Header from "./Header";
import Title from "./Title";
import Countdown from "./Countdown";
import Couple from "./Couple";
import Story from "./Story";
import Gallery from "./Gallery";
import Footer from "./Footer";

function Home() {
  return (
    <section id="home">
      <div className="container-fluid">
        <Header />
        <Title />
        <Countdown />
        <Couple />
        <Story />
        <Gallery />
        <Footer />
      </div>
    </section>
  );
}

export default Home;
