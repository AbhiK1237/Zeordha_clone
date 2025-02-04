import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import Cookies from "js-cookie";
const Home = () => {
  console.log(Cookies.get("token"));
  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;
