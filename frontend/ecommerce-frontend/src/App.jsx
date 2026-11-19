import Nav from "./components/nav/navbar.jsx";
import HomeLand from "./components/homeland/homeland.jsx";
import Footer from "./components/footer/footer.jsx";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/login.jsx";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      
      

      <div className="grow">
        <Routes >
        <Route path="/" element={<HomeLand />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </div>
      
      <Footer />
    </div>

  );
};

export default App;
