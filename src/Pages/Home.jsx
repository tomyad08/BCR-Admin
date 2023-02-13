import React from "react";
import LogIn from "../Component/LogIn";
import Register from "../Component/Register";

const Home = () => {
  return (
    <div>
      <div
        className="container-fluid"
        style={{
          background: "radial-gradient(black, purple)",
          width: "100%",
          height: "600px",
          position: "relative",
          padding: "4%",
        }}
      >
        <div
          className="d-xl-flex justify-content-around border border-3 rounded-3 py-3"
          style={{
            width: " 90%",
            height: "50%",
            backgroundColor: "white",
            position: "absolute",
          }}
        >
          <div>
            <Register />
          </div>
          <div>
            <LogIn />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
