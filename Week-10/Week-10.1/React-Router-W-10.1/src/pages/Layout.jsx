import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div style={{ height: "100vh" }}>
      <nav style={{ background: "yellow" }}>
        <Link to="/">Allen</Link> |{" "}
        <Link to="/neet/online-coaching-class-11">Class 11</Link> |{" "}
        <Link to="/neet/online-coaching-class-12">Class 12</Link>
      </nav>
      {/*       below is the imp section as it's rendering all the pages inside it as a child like class 11/12 etc.
       */}{" "}
      <div style={{ backgroundColor: "red", height: "50vh" }}>
        <Outlet />
      </div>
      <div style={{ backgroundColor: "green" }}>
        <footer>Footer</footer>
      </div>
    </div>
  );
};

export default Layout;
