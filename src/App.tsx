import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from 'react';
import Loading from "./component/loading";
const Home = lazy(() => import("./pages/home"));
const OurProducts = lazy(() => import("./pages/our_products"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<OurProducts />} />
      </Routes>
    </Suspense>
  );
}

export default App;
