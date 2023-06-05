import React from "react";
import DataGraphics from "../Component/Graphics";
import Tabel from "../Component/Tabel";
import NavigationBar from "../Component/NavigationBar";
import NavigationHeader from "../Component/NavigationHeader";

const Dashboard = () => {
  return (
    <div className="d-flex">
      <NavigationBar />
      <div className="w-100">
        <NavigationHeader condition={false} />
        <div className="container-fluid d-flex ps-0" style={{ backgroundColor: "#E5E5E5", height: "100%" }}>
          <div className="menu">
            <h5 className="menu-list" style={{ color: "grey" }}>
              DASHBOARD
            </h5>
            <h5 className="menu-item">Dashboard</h5>
          </div>
          <div className="content w-100">
            <div className="row">
              <div className="col pb-1">
                <div className="breadcrumbs d-flex mt-4 pt-2">
                  <h5>Dashboard</h5>
                  <span>&nbsp; > &nbsp;</span>
                  <p className="mb-2">Dashboard</p>
                </div>
                <div className="row mb-4">
                  <div className="title-page d-flex mb-2">
                    <div className="rectangle-mini me-2"></div>
                    <h5 className="mb-2">Rented Car Data Visualization</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="data-chart" style={{ width: "99%" }}>
              <DataGraphics />
            </div>

            <div className="data-tabel mt-5">
              <h2>Dashboard</h2>
              <div className="title-page d-flex mb-2">
                <div className="rectangle-mini me-2"></div>
                <h5 className="mb-2">Data List</h5>
              </div>
              <Tabel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;