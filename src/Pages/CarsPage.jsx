import React from "react";
import FetchProduct from "../Component/fetchProduct";
import NavigationBar from "../Component/NavigationBar";
import NavigationHeader from "../Component/NavigationHeader";
import { useLocation } from "react-router-dom";

const Cars = () => {
  const location = useLocation();
  const data = location.state;
  return (
    <div className="d-flex">
      <NavigationBar />
      <div className="w-100">
        <NavigationHeader condition={true} />
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
                  <h5>Cars</h5>
                  <span>&nbsp; > &nbsp;</span>
                  <p className="mb-2">List Car</p>
                </div>
              </div>
            </div>
            <FetchProduct props={data} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cars;
