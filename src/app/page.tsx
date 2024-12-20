"use client";

import { useEffect } from "react";
import ReactGA from "react-ga4";

const Home = () => {
  useEffect(() => {
    ReactGA.initialize("G-52QQJBVETH");
    console.log("initialize");
  }, []);

  return <div>Home</div>;
};

export default Home;
