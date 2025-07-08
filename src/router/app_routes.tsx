import { lazy, Suspense } from "react";
import Loading from "../component/loading";
import ScrollToTop from "../component/scroll_to_top";
import { Route, Routes } from "react-router-dom";
const Home = lazy(() => import("../pages/home"));
const OurproductPage = lazy(() => import("../pages/our_products"));
const BlogPage = lazy(() => import("../pages/blog"));
const AboutPage = lazy(() => import("../pages/about"));
const ContactPage = lazy(() => import("../pages/contact"));
const DetailProductPage = lazy(() => import("../pages/detail_product"));
const NotFoundPage = lazy(() => import("../pages/not_found"));

const AppRoutes = () => {
    return (
        <Suspense fallback={<Loading />}>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<OurproductPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/products/:id" element={<DetailProductPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    )
}
export default AppRoutes;