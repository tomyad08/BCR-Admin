import React from "react";
import EditCard from "../Component/EditProduct";
import NavigationBar from "../Component/NavigationBar";
import NavigationHeader from "../Component/NavigationHeader";

const EditCardPage = () => {
  return (
    <div className="d-flex">
      <div className="flex-1" style={{ position: "fixed" }}>
        <NavigationBar />
      </div>
      <div
        className="flex-1 px-1 py-1"
        style={{
          backgroundColor: "white",
          height: "600px",
          width: "100px",
          marginLeft: "100px",
          position: "fixed",
        }}
      >
        <div
          style={{ width: "97%", height: "40px", backgroundColor: "#E5E5E5" }}
        ></div>
        <h5 style={{ color: "grey", paddingTop: "70px" }}>Car</h5>
        <h5>List Car</h5>
      </div>
      <div className="flex-9" style={{ marginLeft: "200px" }}>
        <div
          style={{ position: "fixed", backgroundColor: "white", width: "85%" }}
        >
          <NavigationHeader />
        </div>
        <div
          className="px-5 py-2"
          style={{
            marginTop: "50px",
            width: "1050px",
            backgroundColor: "#E5E5E5",
          }}
        >
          <EditCard />
        </div>
      </div>
    </div>
  );
};
export default EditCardPage;
