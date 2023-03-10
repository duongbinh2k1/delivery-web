import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Landing from "pages/Landing"
import Login from "pages/Login"
import Register from "pages/Register"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route element={<Landing />} path="/" />
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
