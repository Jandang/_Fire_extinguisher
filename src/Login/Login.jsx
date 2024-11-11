/* eslint-disable react/prop-types */
import { useRef } from "react";

import { verifyUser } from "../Data/users";

import Form from "react-bootstrap/Form";

import "./Login.css";

function Login({ setToken, setRole, setUsername, setName_surname }) {
  const userRef = useRef();
  const passRef = useRef();

  return (
    <div className="login-container-background">
      <div className="login-container login-background">
        <img src="/img/Metthier Master Logo.png" alt="logo" className="logo1" />
        <div className="username-input-container">
          <Form.Control
            type="text"
            id="username"
            placeholder="USERNAME"
            style={{
              textAlign: "center",
              border: "transparent",
              width: "280px",
              height: "55px",
              borderRadius: "28px",
              fontSize: "20px",
              fontFamily: "Unbounded",
            }}
            ref={userRef}
            className="username-input"
          />
        </div>
        <Form.Control
          type="password"
          id="password"
          placeholder="PASSWORD"
          style={{
            textAlign: "center",
            border: "transparent",
            width: "280px",
            height: "55px",
            borderRadius: "28px",
            fontSize: "20px",
            fontFamily: "Unbounded",
          }}
          ref={passRef}
          className="password-input"
        />
        <button
          className="btn btn-success mt-2 login-button"
          onClick={() => {
            const user = userRef.current.value.trim();
            const pass = passRef.current.value.trim();
            userRef.current.value = "";
            passRef.current.value = "";
            const userInfo = verifyUser(user, pass);
            if (userInfo === null) {
              alert("Wrong username or password");
              userRef.current.focus();
            } else {
              setToken(userInfo.token);
              setRole(userInfo.role);
              setUsername(userInfo.username);
              setName_surname(userInfo.name_surname);
            }
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
