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
