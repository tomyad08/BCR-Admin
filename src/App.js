import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FetchProduct from "./Component/fetchProduct";
import EditCard from "./Component/EditProduct";
import NewCar from "./Component/AddProduct";
import Home from "./Pages/Home";
import Discovery from "./Pages/Discovery";
import ProtectedRoute from "./Protected/ProtectedRoute";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/discovery" element={<Discovery />} />
            <Route path="/add" element={<NewCar />} />
            <Route path="/edit" element={<EditCard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
