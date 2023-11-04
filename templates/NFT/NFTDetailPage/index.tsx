import Layout from "@/components/Layout";
import Description from "@/components/Description";
import Details from "./Details";

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
        image: "/images/robot.jpg",
        title: "Cute Planet",
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
                Bid placed by <span>0x56C1...8eCC</span>
            </>
        ),
        price: "5.00 ETH",
        date: "Aug 18, 2022 at 18:80",
        url: "https://tesseractxyz.com",
    },
    {
        avatar: "/images/avatar.jpg",
        history: true,
        content: (
            <>
                Listed by <span>@tron77</span>
            </>
        ),
        price: "5.00 ETH",
        date: "Aug 18, 2022 at 18:80",
        url: "https://tesseractxyz.com",
    },
    {
        avatar: "/images/avatar.jpg",
        history: true,
        content: (
            <>
                Minted by <span>@tron77</span>
            </>
        ),
        price: "5.00 ETH",
        date: "Aug 18, 2022 at 18:80",
        url: "https://tesseractxyz.com",
    },
];

const tags = [
    "Cute",
    "Robot",
    "Cute Planet",
    "Suitcase",
    "Spaceship",
    "Animation",
    "Redshift Render",
    "3D",
    "Character",
    "Cinema 4D",
];

const MintNFTPage = () => {
    return (
        <Layout layoutNoOverflow footerHide>
            <Description
                image="/images/cute-planet-large.jpg"
                title="The Explorer"
                date="Minted on Aug 18, 2022"
                statistics={statistics}
                links={links}
                tags={tags}
                provenanceAction={{
                    avatar: "/images/avatar.jpg",
                    history: true,
                    content: (
                        <>
                            Auction won by <span>0x56C1...8eCC</span>
                        </>
                    ),
                    title: (
                        <>
                            Sold for <span>6.05 ETH</span> $9,256.58
                        </>
                    ),
                    date: "Aug 18, 2022 at 18:80",

                    linkTitle: (
                        <>
                            Auction settled by <span>@Katz3</span>
                        </>
                    ),
                    linkUrl: "https://tesseractxyz.com/",
                }}
                provenance={provenance}
                content="Tesseract is the one stop marketplace for discovering state of the art Generative AI models."
            >
                <Details />
            </Description>
        </Layout>
    );
};

export default MintNFTPage;
