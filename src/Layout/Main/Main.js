import React from "react";
import { Outlet } from "react-router-dom";
import { Title } from "../../App";
import Footer from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";

const Main = () => {
  return (
    <div>
      <Title title="Home" />
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
