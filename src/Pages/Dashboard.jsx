import React from "react";
import DataGraphics from "../Component/Graphics";
import Tabel from "../Component/Tabel";
import NavigationBar from "../Component/NavigationBar";
import NavigationHeader from "../Component/NavigationHeader";

const Dashboard = () => {
  return (
    <div>
      <div style={{ position: "fixed" }}>
        <NavigationBar />
      </div>
      <div
        className="px-1 py-1"
        style={{
          backgroundColor: "white",
          height: "600px",
          width: "100px",
          marginLeft: "100px",
          position: "fixed",
        }}
      >
        <h5 style={{ color: "grey", paddingTop: "70px" }}>Dashboard</h5>
      </div>
      <div style={{ marginLeft: "200px" }}>
        <NavigationHeader condition={false} />
        <div className="container">
          <DataGraphics />
        </div>
        <div className="d-flex justify-content-center mt-5">
          <Tabel />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
