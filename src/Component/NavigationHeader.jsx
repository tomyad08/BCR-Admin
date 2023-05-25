import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavigationHeader = (props) => {
  const [search, setSearch] = useState(" ");
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/discovery-page", {
      state: search,
    });
  };
  return (
    <div className="row container-fluid">
      <div className="col py-3 ">
        <h5>Binar Car Rental</h5>
      </div>
      <div className="col py-2">
        <div className="float-end">
          <span className="px-2 py-1 border border-0 rounded-5 mx-1">A</span>
          <span className="ms-1">Admin</span>
        </div>
        <div className="float-end">
          {props.condition && (
            <div
              className="border border-1 border-dark"
              style={{ backgroundColor: "#0D28A6" }}
            >
              <span>
                <input
                  type="text"
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Enter Car Name"
                  style={{ width: "150px", backgroundColor: "white" }}
                  className="border border-0  px-2"
                />
              </span>
              <span
                className="p-1"
                style={{ color: "white" }}
                onClick={handleSearch}
              >
                Search
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default NavigationHeader;
