import React from "react";
import { Link } from "react-router-dom";
import mewtwo_render from "../../mewtwo_render.png";
import Header from "../../components/Header/Header";
const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <h1 className="home__title">Popoki</h1>

        <Link to="/shop" className="home__cta">
          Comprar
        </Link>

        <img src={mewtwo_render} alt="nike hoodie" className="home__image" />
      </div>
    </>
  );
};

export default Home;
