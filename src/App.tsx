import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from 'react';
import Blog from "./pages/blog";
import About from "./pages/about";
const Loading = lazy(() => import("./component/loading"))
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
      </Routes>
    </Suspense>
  );
}

export default App;
