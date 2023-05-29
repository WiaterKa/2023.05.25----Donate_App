import Homepage from "./Routes/Homepage/Homepage";
import "./sass/main.scss";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="content-wrapper">
      <Routes>
        <Route path="/*" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
