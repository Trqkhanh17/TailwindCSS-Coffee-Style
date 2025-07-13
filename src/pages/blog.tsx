import Header from "../component/header";

import SubscribeUS from "../component/subscribeUS";
import Footer from "../component/footer";
import BlogContent from "../component/blogComponent/content.blog";



const Blog = () => {

    return (
        <div className="content-wrapper font-Karla max-w-[1536px] text-base mx-auto px-8">
            <Header />
            <BlogContent />
            <SubscribeUS />
            <Footer />
        </div>
    )
}
export default Blog;