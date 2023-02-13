import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteProduct, fetchProduct } from "../ProductSlice";

const FetchProduct = () => {
  const products = useSelector((state) => state.products.products.cars);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  if (!products) {
    return;
  }
  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };
  const handleEdit = (value) => {
    navigate("/edit", {
      state: value,
    });
  };
  const handleAdd = () => {
    navigate("/add");
  };
  return (
    <div className="container">
      <div style={{ margin: "0 auto", width: "200px", height: "100px" }}>
        <button
          className="btn btn-primary mt-4"
          style={{ width: "100%" }}
          onClick={handleAdd}
        >
          Add New Car
        </button>
      </div>
      <div className="row gap-3 container">
        {products.map((value) => (
          <>
            <div
              className="col-md-3 border border-2 rounded-2 mb-2 float-center"
              style={{ overflow: "hidden" }}
              id="cardMobilSearch"
              key={value.id}
            >
              <img
                src={value.image}
                alt=" "
                style={{ width: "115%", height: "155px", marginLeft: "-12px" }}
              />
              <h5>{value.name}</h5>
              <p style={{ lineHeight: "5px" }}>Rp. {value.price}</p>
              <button
                className="btn btn-danger mb-2"
                style={{ width: "100%", lineHeight: "20px" }}
                onClick={() => handleDelete(value.id)}
              >
                Delete
              </button>
              <button
                className="btn btn-primary mb-2"
                style={{ width: "100%", lineHeight: "20px" }}
                onClick={() => handleEdit(value)}
              >
                Edit
              </button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default FetchProduct;
