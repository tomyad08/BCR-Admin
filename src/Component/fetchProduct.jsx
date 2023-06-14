import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteProduct, fetchProduct } from "../ProductSlice";
import NumberWithCommas from "../utils/currency";
import Modal from "react-bootstrap/Modal";

const FetchProduct = (props) => {
  const products = useSelector((state) => state.products.products.cars);
  console.log(products);
  const [kategori, setKategori] = useState(" ");
  const [modalShow, setModalShow] = useState(false);
  const [ID, setID] = useState(" ");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  if (!products) {
    return;
  }
  const handleDelete = () => {
    dispatch(deleteProduct(ID));
    setModalShow(false);
  };
  const handleEdit = (value) => {
    navigate("/edit", {
      state: value,
    });
  };

  return (
    <div style={{ backgroundColor: "#E5E5E5" }}>
      <div className="row mb-4">
        <div className="col">
          <h3 className="mb-0">List Car</h3>
        </div>
        <div className="col">
          <Link to="/add">
            <button
              className="btn float-end"
              style={{ backgroundColor: "#0D28A6", color: "white" }}
            >
              + Add New Car
            </button>
          </Link>
        </div>
      </div>
      <div className="mb-4">
        <span
          className="p-2 me-2 border border-1 rounded-2 border-primary"
          onClick={() => setKategori(" ")}
          id="menuKategori"
        >
          All
        </span>
        <span
          className="p-2 mx-2 border border-1 rounded-2 border-primary"
          onClick={() => setKategori("small")}
          id="menuKategori"
        >
          2 - 4 people
        </span>
        <span
          className="p-2 mx-2 border border-1 rounded-2 border-primary"
          onClick={() => setKategori("medium")}
          id="menuKategori"
        >
          4 - 6 people
        </span>
        <span
          className="p-2 mx-2 border border-1 rounded-2 border-primary"
          onClick={() => setKategori("large")}
          id="menuKategori"
        >
          6 - 8 people
        </span>
      </div>

      <div className="product-wrapper">
        {products
          .filter((value) => {
            if (kategori === " ") {
              return value;
            } else if (kategori === value.category.toLowerCase()) {
              return value;
            }
          })
          .filter((value) => {
            if (props.props === null) {
              return value;
            } else if (
              value.name.toLowerCase().includes(props.props.toLowerCase())
            ) {
              return value;
            }
          })
          .map((value) => (
            <div key={value.id} className="mb-3">
              <div
                className="border border-2 rounded-2  product-item p-4"
                style={{ backgroundColor: "white" }}
              >
                <div
                  className="mb-3"
                  style={{
                    width: "100%",
                    height: "222px",
                    overflow: "hidden",
                  }}
                >
                  <img src={value.image} alt=" " width="100%" />
                </div>
                <h6 className="" style={{ lineHeight: "20px" }}>
                  {value?.name?.toUpperCase()}
                </h6>
                <p className="mb-3" style={{ lineHeight: "10px" }}>
                  <strong>Rp. {NumberWithCommas(value.price)}/hari</strong>
                </p>
                <div className="mb-3">
                  <span className="pe-2">
                    <img src="./Assets/fi_users.png" alt=" " />
                  </span>
                  <span>{value.category}</span>
                </div>
                <div className="mb-4">
                  <p className="mb-0">
                    Updated At: {value.updatedAt.substring(0, 10)}
                  </p>
                </div>
                <div className="d-flex flex-row gap-10 justify-content-between">
                  <button
                    onClick={() => {
                      setID(value.id);
                      setModalShow(true);
                    }}
                    style={{ width: "48%", height: "48px" }}
                    className="btn col-4 border border-2 border-danger text-center"
                  >
                    <span className="mx-1">
                      <img src="./Assets/fi_trash-2.png" alt=" " width="13px" />
                    </span>
                    <span>Delete</span>
                  </button>
                  <button
                    onClick={() => handleEdit(value)}
                    className="btn col-4 border border-0 text-center"
                    style={{ backgroundColor: "#5CB85F" }}
                  >
                    <span className="mx-1 ">
                      <img src="./Assets/fi_edit.png" width="13px" alt=" " />
                    </span>
                    <span>Edit</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>

      <Modal
        show={modalShow}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="py-3 px-4">
          <div className="d-flex justify-content-center">
            <img src="./Assets/img-BeepBeep.png" alt=" " width="50%" />
          </div>
          <h5 className="text-center">Menghapus Data Mobil</h5>
          <p style={{ textAlign: "justify" }}>
            Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin
            menghapus?
          </p>
          <div className="d-flex justify-content-around">
            <button
              className=" btn border border-0 py-1"
              style={{
                width: "100px",
                backgroundColor: "#0D28A6",
                color: "white",
              }}
              onClick={() => {
                handleDelete();
              }}
            >
              Ya
            </button>
            <button
              className=" btn border border-2 border-primary py-1"
              style={{ width: "100px" }}
              onClick={() => setModalShow(false)}
            >
              Tidak
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default FetchProduct;
