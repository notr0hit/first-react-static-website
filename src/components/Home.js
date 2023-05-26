import React from "react";
import styled from "styled-components";

const HeroContainer = styled.div`
  background-image: linear-gradient(
      rgba(101, 193, 198, 0.8),
      rgba(101, 193, 198, 0.01)
    ),
    url("/main.jpeg");
  background-repeat: no-repeat;
  background-size: 100%;
`;

const Home = () => {
  return (
    <HeroContainer>
      <div className="hero">
        <h1 className="banner">CONTINUE EXPLORING</h1>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
          perferendis nobis corporis ea ad quis accusamus laborum sunt, cum
          atque.
        </p>
        <button className="btn">EXPLORE TOURS</button>
      </div>
    </HeroContainer>
  );
};

export default Home;
