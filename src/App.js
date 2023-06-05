import "./App.css";
import "./Assets/css/cms.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./Protected/ProtectedRoute";
import Register from "./Component/Register";
import LogIn from "./Component/LogIn";
import Cars from "./Pages/CarsPage";
import EditCardPage from "./Pages/EditPage";
import AddCardPage from "./Pages/AddPage";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<LogIn />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/add" element={<AddCardPage />} />
            <Route path="/edit" element={<EditCardPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
