import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [kondisi, setKondisi] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleRegis = () => {
    const payload = {
      email: email,
      password: password,
      role: "Admin",
    };
    axios
      .post(
        "https://bootcamp-rent-cars.herokuapp.com/admin/auth/register ",
        payload
      )
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err.message);
        setKondisi(!kondisi);
      });
  };

  return (
    <div
      style={{
        backgroundImage: "url(./Assets/imageBackground.png)",
        height: "600px",
      }}
    >
      <div
        className="float-end"
        style={{ height: "600px", width: "400px", backgroundColor: "white" }}
      >
        <h2 className="mx-4" style={{ paddingTop: "200px" }}>
          <strong>Welcome Admin BCR</strong>
        </h2>
        {kondisi && (
          <p
            className="mx-4 p-1"
            style={{ textAlign: "justify", backgroundColor: "pink" }}
          >
            Username yang anda cantumkan telah terdaftar sebelumnya.
          </p>
        )}
        <input
          type="email"
          onChange={handleEmail}
          placeholder="email"
          className="mb-1 border border-2 mx-4 p-2"
          style={{ width: "320px", height: "40px", fontSize: " 20px" }}
        />

        <input
          type="password"
          onChange={handlePassword}
          placeholder="password"
          style={{ width: "320px", height: "40px", fontSize: " 20px" }}
          className="border border-2 p-2 mx-4"
        />
        <button
          onClick={handleRegis}
          className="btn btn-primary my-3 mx-4"
          style={{ width: "80%", fontSize: "20px" }}
        >
          Register
        </button>
        <p className="mx-4">*Minimal password 6 karakter</p>
        <p className="mx-4" style={{ lineHeight: "10px" }}>
          Sudah memiliki akun? Silahkan langsung <Link to="/login">Log In</Link>
        </p>
      </div>
    </div>
  );
};
export default Register;
