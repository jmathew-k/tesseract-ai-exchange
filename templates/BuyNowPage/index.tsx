import Layout from "@/components/Layout";
import Description from "@/components/Description";
import Price from "@/components/Price";
import Details from "@/components/Details";

const statistics = [
    {
        label: "Created by",
        avatar: "/images/avatar.jpg",
        history: true,
        title: "Dash",
        login: "randomdash",
    },
    {
        label: "Collection",
        image: "/images/balls.jpg",
        title: "Language Models",
        category: "cute",
    },
];

const links = [
    {
        title: "View on Etherscane",
        icon: "country",
        url: "https://tesseractxyz.com",
    },
    {
        title: "View metadata",
        icon: "link",
        url: "https://tesseractxyz.com",
    },
    {
        title: "View on IPFS",
        icon: "link",
        url: "https://tesseractxyz.com",
    },
];

const provenance = [
    {
        avatar: "/images/avatar.jpg",
        history: true,
        content: (
            <>
                Minted by <span>@tron77</span>
            </>
        ),
        date: "Aug 18, 2022 at 18:80",
        url: "https://tesseractxyz.com",
    },
];

const BuyNowPage = () => {
    return (
        <Layout layoutNoOverflow footerHide>
            <Description
                image="/images/main-pic-1.jpg"
                captionHide
                title="Escape"
                date="Minted on Aug 18, 2022"
                statistics={statistics}
                links={links}
                addTags
                provenance={provenance}
                content="Tesseract is the one stop marketplace for discovering state of the art Generative AI models."
            >
                <>
                    <Details
                        title="Model Runs"
                        content={
                            <>
                                Confirm the transaction to buy{" "}
                                <strong>Escape NFT</strong>
                            </>
                        }
                        linkUrl="/article"
                        linkTitle="Learn how to buy on Tesseract"
                    />
                    <Price
                        title="Total price"
                        price="1.00"
                        buttonText="confirm"
                        content="Tesseract is the one stop marketplace for discovering state of the art Generative AI models."
                    />
                </>
            </Description>
        </Layout>
    );
};

export default BuyNowPage;
