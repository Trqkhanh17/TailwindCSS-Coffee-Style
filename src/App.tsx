import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from 'react';
import Blog from "./pages/blog";
import About from "./pages/about";
import Contact from "./pages/contact";
import Loading from "./component/loading";
import { NotFound } from "./pages/not_found";
const Home = lazy(() => import("./pages/home"));
const OurProducts = lazy(() => import("./pages/our_products"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<OurProducts />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
