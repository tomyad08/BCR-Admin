import axios from "axios";
import backLogin from "../Assets/img/backgroundLogin.png"
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const navigate = useNavigate();
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLogIn = () => {
    const payload = {
      email: email,
      password: password,
    };
    axios
      .post(
        "https://bootcamp-rent-cars.herokuapp.com/admin/auth/login",
        payload
      )
      .then((res) => {
        localStorage.setItem("token", res.data.access_token);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err.message);
        alert("gagal");
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  const afterLogIn = () => {
    navigate("/dashboard");
  };
  return (
    <div className="row m-0">
      <div className="col-lg-8 px-0 back-transparan">
        <img src={backLogin} className="background-login" alt="" srcset="" />
      </div>
      <div className="col-lg-4 px-5 my-auto">
      {isLogin ? (
          <div>
            <button onClick={handleLogout} className="btn btn-danger mt-3 mx-2">
              Log Out
            </button>
            <p>Silahkan Log Out</p>
          </div>
          ) : (
          <>
            <div>
              <div className="logo-login mb-4"></div>
              <h2 className="welcome">Welcome, Admin BCR</h2>
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
                onClick={handleLogIn}
                className="btn btn-primary w-100"
              >
                Sign In
              </button>
            </div>
          </>
          )}
      </div>
    </div>
  );
};
export default LogIn;
