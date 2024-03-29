import { useState } from "react";
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
        login: "tron77",
    },
    {
        label: "Collection",
        image: "/images/balls.jpg",
        title: "Escape",
        category: "cute",
    },
];

const links = [
    {
        title: "View on Etherscan",
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

const MakeOfferPage = () => {
    const [bid, setBid] = useState<string>("");
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
                        title="Make an offer"
                        content="Tesseract is the one stop marketplace for discovering state of the art Generative AI models."
                        linkUrl="/article"
                        linkTitle="Learn how to make an offer"
                    />
                    <Price
                        title="Total offer"
                        value={bid}
                        setValue={setBid}
                        buttonText="make offer"
                        content={
                            <>
                                <p>
                                    Placing this bid will start a 24 hour
                                    auction for the NFT.
                                </p>
                                <p>
                                    Once a bid is placed, it cannot be
                                    withdrawn.
                                </p>
                            </>
                        }
                    />
                </>
            </Description>
        </Layout>
    );
};

export default MakeOfferPage;
