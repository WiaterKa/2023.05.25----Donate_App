import Homepage from "./Routes/Homepage/Homepage";
import "./sass/main.scss";
import { Route, Routes } from "react-router-dom";
import Login from "./Routes/Login/Login";
import Register from "./Routes/Register/Register";
import { useState } from "react";
import GiveAway from "./Routes/GiveAway/GiveAway";

function App() {
  const [user, setUser] = useState("");

  return (
    <div className="content-wrapper">
      <Routes>
        <Route path="/*" element={<Homepage user={user} setUser={setUser} />} />
        <Route
          path="/giveaway/*"
          element={<GiveAway user={user} setUser={setUser} />}
        />

        <Route
          path="/login"
          element={<Login user={user} setUser={setUser} />}
        />
        <Route
          path="/register"
          element={<Register user={user} setUser={setUser} />}
        />
      </Routes>
    </div>
  );
}

export default App;
