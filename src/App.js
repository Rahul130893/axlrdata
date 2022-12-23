import Login from "./pages/Login"
import "./App.css"
import { Routes, Route } from "react-router-dom"
import { Product } from "./pages/Product"
import ResponsiveAppBar from "./components/Navbar"
import {Distance} from "./pages/Distance"

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="category" element={<Product />} />
        <Route path="distance" element={<Distance />} />
      </Routes>
    </div>
  );
}

export default App;
