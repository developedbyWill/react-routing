import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Items from "./pages/Item";
import ServiceDetails from "./pages/ServiceDetails";
import ErrorPage from "./pages/ErrorPage";
import Router from "./components/Router";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Router />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/items" element={<Items />} />
          <Route path="/items/:id" element={<ServiceDetails />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
