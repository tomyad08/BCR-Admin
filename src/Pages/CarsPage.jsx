import React from "react";
import FetchProduct from "../Component/fetchProduct";
import NavigationBar from "../Component/NavigationBar";
import NavigationHeader from "../Component/NavigationHeader";
import { useLocation } from "react-router-dom";

const Cars = () => {
  const location = useLocation();
  const data = location.state;
  return (
    <div>
      <div style={{ position: "fixed" }}>
        <NavigationBar />
      </div>
      <div
        className=" px-1 py-1"
        style={{
          backgroundColor: "white",
          height: "600px",
          width: "100px",
          marginLeft: "100px",
          position: "fixed",
        }}
      >
        <h5 style={{ color: "grey", paddingTop: "120px" }}>List Car</h5>
      </div>
      <div style={{ marginLeft: "200px" }}>
        <NavigationHeader condition={true} />
        <FetchProduct props={data} />
      </div>
    </div>
  );
};
export default Cars;
