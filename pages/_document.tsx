import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta
                        content="Tesseract is the one stop marketplace for discovering state of the art Generative AI models."
                        name="Tesseract "
                    />
                    <meta
                        content="Tesseract GenAI Exchange"
                        property="og:title"
                    />
                    <meta
                        content="Tesseract GenAI Exchange"
                        property="og:description"
                    />
                    <meta
                        content="%PUBLIC_URL%/fb-og-image.png"
                        property="og:image"
                    />
                    <meta
                        property="og:url"
                        content="https://tesseractxyz.com"
                    />
                    <meta
                        property="og:site_name"
                        content="Tesseract GenAI Exchange"
                    />
                    <meta
                        content="Tesseract GenAI Exchange"
                        property="twitter:title"
                    />
                    <meta
                        content="Tesseract is the one stop marketplace for discovering state of the art Generative AI models."
                        property="twitter:description"
                    />
                    <meta
                        content="%PUBLIC_URL%/twitter-card.png"
                        property="twitter:image"
                    />
                    <meta property="og:type" content="Article" />
                    <meta content="summary" name="twitter:card" />
                    <meta name="twitter:site" content="@tesseraxt-xyz" />
                    <meta name="twitter:creator" content="@tesseract_xyz" />
                    <meta property="fb:admins" content="132951670226590" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <meta name="theme-color" content="#000000" />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#ffffff" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body className="app">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
