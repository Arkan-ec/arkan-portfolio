import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const Gallery = lazy(() => import("./pages/gallery"));
const Services = lazy(() => import("./pages/services"));
const Contact = lazy(() => import("./pages/contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Simple loading component
const PageLoader = () => (
  <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center">
    <div className="text-[#ff6b00] text-xl">Loading...</div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
