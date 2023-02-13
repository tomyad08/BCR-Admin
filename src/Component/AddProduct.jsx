import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addProduct } from "../ProductSlice";

const NewCar = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(" ");
  const [inputs, setInputs] = useState(" ");
  const dispatch = useDispatch();
  console.log(inputs);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const datas = {
      id: inputs.id,
      name: inputs.name,
      category: inputs.category,
      image: image,
      price: inputs.price,
    };
    dispatch(addProduct(datas));
    navigate("/discovery");
    console.log(inputs);
  };

  const handleImg = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div
      style={{
        background: "radial-gradient(black, purple)",
        paddingTop: "20px",
        paddingBottom: "145px",
      }}
    >
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "8%" }}
      >
        <div
          className="border border-2 rounded-2 p-3"
          style={{ width: "30%", backgroundColor: "white" }}
        >
          <form onSubmit={handleSubmit}>
            <h1 className="text-center">Add Cars</h1>
            <input
              type="text"
              name="name"
              value={inputs.name}
              onChange={handleChange}
              placeholder="Nama Mobil"
              style={{ width: "100%", marginBottom: "10px" }}
              className="border border-2 rounded-1 p-2"
            />

            <br />

            <select
              type="select"
              name="category"
              onChange={handleChange}
              style={{ width: "100%", marginBottom: "10px" }}
              className="border border-2 rounded-1 p-2"
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>

            <br />

            <input
              type="number"
              name="price"
              value={inputs.price || ""}
              onChange={handleChange}
              placeholder="Harga"
              style={{ width: "100%", marginBottom: "10px" }}
              className="border border-2 rounded-1 p-2"
            />

            <br />
            <input
              type="file"
              accept="image/*"
              name="image"
              onChange={handleImg}
              placeholder="Picture"
              style={{ width: "100%", marginBottom: "10px" }}
            />

            <br />
            <Link to="/discovery">
              <button
                className="btn btn-danger"
                style={{ width: "100%", marginBottom: "10px" }}
              >
                cancel
              </button>
            </Link>
            <input
              type="submit"
              className="btn btn-primary"
              style={{ width: "100%", marginBottom: "10px" }}
            />
          </form>
        </div>
      </div>
    </div>
  );
};
export default NewCar;
