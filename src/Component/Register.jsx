import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import backLogin from "../Assets/img/backgroundLogin.png"

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
    <div className="row m-0">
      <div className="col-lg-8 px-0 back-transparan">
        <img src={backLogin} className="background-login" alt="" srcset="" />
      </div>
      <div className="col-lg-4 px-5 my-auto">
      
          <>
            <div>
              <div className="logo-login mb-4"></div>
              <h2 className="welcome">Welcome, Admin BCR</h2>
              {kondisi && (
                <p className="text-alert p-2 my-3">
                  Username yang anda cantumkan telah terdaftar sebelumnya.
                </p>
              )}
              <div>
                <label htmlFor="email" className="label-login mb-1">Email</label>
                <input
                  type="email"
                  onChange={handleEmail}
                  placeholder="Contoh: johndee@gmail.com"
                  className="form-control mb-3"
                />
              </div>

              <div>
                <label htmlFor="password" className="label-login mb-1">Password</label>
                <input
                  type="password"
                  onChange={handlePassword}
                  placeholder="6+ karakter"
                  className="form-control mb-4"
                />
              </div>

              <button
                onClick={handleRegis}
                className="btn btn-primary w-100"
              >
                Register
              </button>
            </div>
            <p className="mt-3">*Minimal password 6 karakter</p>
            <p className="">
              Sudah memiliki akun? Silahkan langsung <Link to="/login">Log In</Link>
            </p>
          </>
      </div>
    </div>
  );
};
export default Register;
