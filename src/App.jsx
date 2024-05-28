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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
