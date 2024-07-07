import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NoPage from "../pages/NoPage";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RoutesComponent() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="bg-gray-200 min-h-[85vh]">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}
