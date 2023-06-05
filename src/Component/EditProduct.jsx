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
      <div>
        <div className="breadcrumbs d-flex mt-4 pt-2">
          <h5 className="mb-0">Cars</h5>
          <span className="mb-0">&nbsp; > &nbsp;</span>
          <p className="mb-0">List Car</p>
          <span>&nbsp; > &nbsp;</span>
          <p className="mb-0">Edit Car</p>
        </div>
        <h1 className="mb-3">Edit Car</h1>
        <div
          className="p-3 rounded"
          style={{ width: "100%", backgroundColor: "white" }}
        >
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-2">
                <label htmlFor="">Nama*</label>
              </div>
              <div className="col-md-5">
                <input
                  type="text"
                  name="name"
                  value={inputs.name}
                  onChange={handleChange}
                  placeholder="Nama Mobil"
                  style={{ width: "100%", marginBottom: "10px" }}
                  className="border border-2 rounded-1 p-2"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-2">
                <label htmlFor="">Harga*</label>
              </div>
              <div className="col-md-5">
                <input
                  type="number"
                  name="price"
                  value={inputs.price}
                  onChange={handleChange}
                  placeholder={inputs.price}
                  style={{ width: "100%", marginBottom: "10px" }}
                  className="border border-2 rounded-1 p-2"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-2">
                <label htmlFor="">Foto*</label>
              </div>
              <div className="col-md-5">
                <input
                  className="form-control"
                  type="file"
                  accept="image/*"
                  name="image"
                  onChange={handleImg}
                  placeholder="Picture"
                  style={{ width: "100%", marginBottom: "10px" }}
                />
                <p>File size max. 2MB</p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-2">
                <label htmlFor="">Kategori*</label>
              </div>
              <div className="col-md-5">
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
              </div>
            </div>

            <div className="row">
              <div className="col-md-2">
                <label htmlFor="">Created at</label>
              </div>
              <div className="col-md-5">-</div>
            </div>

            <div className="row">
              <div className="col-md-2">
                <label htmlFor="">Updated at</label>
              </div>
              <div className="col-md-5">-</div>
            </div>

            <div className="d-flex mt-5">
              <Link to="/discovery-page">
                <button
                  type="button"
                  className="btn btn-outline-primary me-2"
                  style={{
                    width: "100px",
                    marginBottom: "10px",
                    background: "white",
                  }}
                >
                  Cancel
                </button>
              </Link>
              <input
                type="submit"
                className="btn btn-primary"
                value="Save"
                style={{ width: "100px", marginBottom: "10px" }}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default EditCard;
