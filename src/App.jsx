import { useState } from "react";

import Login from "./Login/Login";
import User from "./User/User";
import Admin from "./Admin/Admin";

import "./App.css";

function App() {
  const [token, setToken] = useState("");
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [name_surname, setName_surname] = useState("");

  if (token === "") {
    return (
      <Login
        setToken={setToken}
        setRole={setRole}
        setUsername={setUsername}
        setName_surname={setName_surname}
      />
    );
  } else {
    return (
      <div>
        {/* -------------------------------------User------------------------------------------ */}
        {role === "user" && (
          <User
            username={username}
            name_surname={name_surname}
            setToken={setToken}
            setRole={setRole}
            setUsername={setUsername}
            setName_surname={setName_surname}
          />
        )}
        {/* -------------------------------------Admin----------------------------------------- */}
        {role === "admin" && <Admin />}
      </div>
    );
  }
}

export default App;
