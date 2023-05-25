import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { updateProduct } from "../ProductSlice";

const EditCard = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const product = useSelector((state) =>
    state.products.products.cars.find((t) => t.id === location.state.id)
  );
  const [image, setImage] = useState(" ");
  const [inputs, setInputs] = useState(
    product
      ? {
          id: product.id,
          name: product.name,
          category: product.category,
          price: product.price,
          image: product.image,
        }
      : " "
  );

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
    dispatch(updateProduct(datas));
    navigate("/cars");
  };

  const handleImg = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <>
      <div style={{ width: "100%", backgroundColor: "white" }}>
        <form onSubmit={handleSubmit}>
          <h1>Edit</h1>
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
            name="kategori"
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
            value={inputs.price}
            onChange={handleChange}
            placeholder={inputs.price}
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

          <div className="d-flex justify-content-around pt-5">
            <Link to="/discovery-page">
              <button
                className="btn btn-danger"
                style={{ width: "100px", marginBottom: "10px" }}
              >
                cancel
              </button>
            </Link>
            <input
              type="submit"
              className="btn btn-success"
              style={{ width: "100px", marginBottom: "10px" }}
            />
          </div>
        </form>
      </div>
    </>
  );
};
export default EditCard;
