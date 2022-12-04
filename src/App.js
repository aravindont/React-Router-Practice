import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NoMatch from "./components/NoMatch";
import PaymentsPage from "./components/PaymentsPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="payment-gateway" element={<PaymentsPage />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </div>
  );
}
export default App;
