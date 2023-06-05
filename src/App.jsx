import Homepage from "./Routes/Homepage/Homepage";
import "./sass/main.scss";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./Routes/Login/Login";
import Register from "./Routes/Register/Register";
import { useState } from "react";
import GiveAway from "./Routes/GiveAway/GiveAway";
import Error from "./Routes/Error/Error";
import Logout from "./Routes/Logout/Logout";

function App() {
  const [user, setUser] = useState("");

  return (
    <div className="content-wrapper">
      <Routes>
        <Route path="/" element={<Homepage user={user} setUser={setUser} />} />
        <Route
          path="/giveaway"
          element={<GiveAway user={user} setUser={setUser} />}
        />
        <Route
          path="/login"
          element={<Login user={user} setUser={setUser} />}
        />
        <Route path="/logout" element={<Logout />} />
        <Route
          path="/register"
          element={<Register user={user} setUser={setUser} />}
        />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Navigate to="/error" />} />
      </Routes>
    </div>
  );
}

export default App;
