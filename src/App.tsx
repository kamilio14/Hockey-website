import React from "react";
import { Navbar } from "./navbar";
import "./index.css";
import { MainContainerRight } from "./main-container-right";
import sideImage from "./side-image.jpeg";
import { TopContainer } from "./top-container";
import { MainContainerLeft } from "./main-container-left";
import { Footer } from "./Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <TopContainer />
      <MainContainerLeft />
      <MainContainerRight />
      <Footer />
    </div>
  );
}

export default App;
