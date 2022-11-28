import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// pages & component
import Home from "./pages/Home";
import AccountSettings from "./pages/AccountSettings";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useAuthContext } from './hooks/useAuthContext';

function App() {

  const { user } = useAuthContext();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/accountsettings" element={user ? <AccountSettings /> : <Navigate to="*" />} ></Route>
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/accountsettings" />}></Route>
        <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/accountsettings" />}></Route>
        <Route path="*" element={<ErrorPage />} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
