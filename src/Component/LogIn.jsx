import axios from "axios";
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
              <h2 className="mx-4" style={{ paddingTop: "200px" }}>
                <strong>Welcome Admin BCR</strong>
              </h2>
              <input
                type="email"
                onChange={handleEmail}
                placeholder="email"
                className="mb-1 p-2 mx-4 border border-2"
                style={{ width: "320px", height: "40px", fontSize: " 20px" }}
              />
              <br />
              <input
                type="password"
                onChange={handlePassword}
                placeholder="password"
                className="mx-4 p-2 border border-2"
                style={{ width: "320px", height: "40px", fontSize: " 20px" }}
              />

              <button
                onClick={handleLogIn}
                className="btn btn-primary mx-4 my-3 px-auto"
                style={{ width: "80%", fontSize: "20px" }}
              >
                LogIn
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default LogIn;
