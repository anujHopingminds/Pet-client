import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/header/Home';
import Header from './components/header/Header';// Ensure this path is correct
import Signup from './components/signup/Signup';
import ForgetPassword from './components/signup/ForgetPassword';
import ResetPassword from './components/signup/ResetPassword';
import ChoosseDonor from './components/petdata/ChoosseDonor';
import Donor from './components/petdata/Donor';
import PetProfile from './components/petdata/PetProfile';
import About from './components/header/About';
import TeamCarousel from './components/header/TeamCarousel';
import ProfileDetail from './components/petdata/ProfileDetail';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotPassword" element={<ForgetPassword />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/chooseDonor" element={<ChoosseDonor />} />
        <Route path="/donor" element={<Donor />} />
        <Route path="/petProfile" element={<PetProfile />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<TeamCarousel />} />
        <Route path="/profileDetail/:id" element={<ProfileDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
