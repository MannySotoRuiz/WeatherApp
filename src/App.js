import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// pages & component
import Home from "./pages/Home";
import AccountSettings from "./pages/AccountSettings";
import ErrorPage from "./pages/ErrorPage";
import Demo from './pages/demo/demo'
function App() {
  return (
    // <Router>
    //   <div className="App">
    //     <Home/>
    //   </div>
    // </Router>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/accountsettings" element={<AccountSettings />} ></Route>
        <Route path="*" element={<ErrorPage />} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
