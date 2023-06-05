import Homepage from "./Routes/Homepage/Homepage";
import "./sass/main.scss";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./Routes/Login/Login";
import Register from "./Routes/Register/Register";
import GiveAway from "./Routes/GiveAway/GiveAway";
import Error from "./Routes/Error/Error";
import Logout from "./Routes/Logout/Logout";
import Orders from "./Routes/Orders/Orders";

function App() {
  return (
    <div className="content-wrapper">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/giveaway" element={<GiveAway />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Navigate to="/error" />} />
      </Routes>
    </div>
  );
}

export default App;
