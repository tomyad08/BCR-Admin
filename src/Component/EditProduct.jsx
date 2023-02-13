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
    dispatch(updateProduct(inputs));
    navigate("/");
  };

  return (
    <>
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
              <h1 className="text-center">Edit</h1>
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
                name="image"
                onChange={handleChange}
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
    </>
  );
};
export default EditCard;
