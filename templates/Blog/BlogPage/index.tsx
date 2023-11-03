import Layout from "@/components/Layout";
import Main from "@/components/Main";
import Articles from "./Articles";
import Newsletter from "@/components/Newsletter";

import { blog } from "@/mocks/blog";

const HelpDetailPage = () => {
    return (
        <Layout layoutNoOverflow>
            <Main
                classTitle="hero"
                image="/images/blog.jpg"
                title="Tesseract Blog"
                info="Tesseract NFT marketplace blog"
            />
            <Articles items={blog} />
            <Newsletter />
        </Layout>
    );
};

export default HelpDetailPage;
