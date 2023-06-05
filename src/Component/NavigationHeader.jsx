import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavigationHeader = (props) => {
  const [search, setSearch] = useState(" ");
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/cars", {
      state: search,
    });
  };
  return (
    <div className="row pe-0 container-fluid align-items-center">
      <div className="ms-4" style={{ width: "100px", height: "34px", backgroundColor: "#E5E5E5", marginRight: "87px" }}></div>
      <div className="col py-2 ">
        <img src="./Assets/fi_menu.png" alt=" " className="float-start" />
      </div>
      <div className="col py-2">
        <div className="float-end d-flex align-items-center">
          <span className="py-1 border border-0 rounded-5 me-2 inisial-admin text-center">A</span>
          <span className="ms-1">Admin</span>
        </div>
        <div className="float-end">
          {props.condition && (
            <div>
              <div className="input-group border-0">
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-outline-primary me-4"
                  onClick={handleSearch}
                  type="button"
                  id="button-addon2"
                >
                  Search
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default NavigationHeader;
