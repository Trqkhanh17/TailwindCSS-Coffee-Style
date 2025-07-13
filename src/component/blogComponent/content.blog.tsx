
import BlogFeedWrap from "./blog_feed_wrap";
import DecoBlock from "./deco_block";
import OwnerSquote from "./owners_quote";

const BlogContent = () => {
    return (
        <div className=" flex flex-col w-full justify-center items-center mx-auto">
            <DecoBlock />
            <BlogFeedWrap />
            <OwnerSquote />
        </div>
    )
}
export default BlogContent;