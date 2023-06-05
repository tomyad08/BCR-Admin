import React from "react";
import NewCar from "../Component/AddProduct";
import EditCard from "../Component/EditProduct";
import NavigationBar from "../Component/NavigationBar";
import NavigationHeader from "../Component/NavigationHeader";

const AddCardPage = () => {
  return (
    <div className="d-flex">
      <NavigationBar />
      <div className="w-100">
        <NavigationHeader />
        <div  className="container-fluid h-100 d-flex ps-0" style={{ backgroundColor: "#E5E5E5" }}>
          
          <div className="menu flex-1" >
            <h5 className="menu-list" style={{ color: "grey"}}>CARS</h5>
            <h5 className="menu-item">List Car</h5>
          </div>
          <div className="content w-100 flex-9" >
            <div className="row">
              <NewCar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddCardPage;
