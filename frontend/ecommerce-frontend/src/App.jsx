import Nav from "./components/nav/navbar.jsx";
import Profile from "../src/pages/profile.jsx";
import Footer from "./components/footer/footer.jsx";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/login.jsx";
import Home from "./pages/home.jsx";


const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      
      

      <div className="grow">
        <Routes >
        <Route path="/home" element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </div>
      
      <Footer />
    </div>

  );
};

export default App;
