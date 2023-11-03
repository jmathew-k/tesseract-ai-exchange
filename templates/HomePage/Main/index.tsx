import cn from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import styles from "./Main.module.sass";
import Arrow from "@/components/Arrow";
import Item from "./Item";

const list = [
    {
        title: "QR generator",
        collection: "qr2AI",
        price: "2434",
        reserve: "qrv2-gen",
        image: "/images/qr-ai.jpeg",
        color: "#BCE6EC",
    },
    {
        title: "Stable Diffusion",
        collection: "SDXL",
        price: "16473",
        reserve: "stability-ai",
        image: "/images/astronaut-horse.jpg",
    },
    {
        title: "The creator network.",
        collection: "Escape III",
        price: "5.4 ETH",
        reserve: "1.45 ETH",
        image: "/images/auction-pic-2.jpg",
        color: "#B9A9FB",
    },
];

import { Navigation, Scrollbar } from "swiper";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

type MainProps = {};

const Main = ({}: MainProps) => (
    <>
        <div className={styles.row}>
            <div className={styles.col}>
                <h1 className={cn("hero", styles.title)}>AI Exchange</h1>
                <Arrow className={styles.arrow} />
            </div>
            <div className={styles.col}>
                <div className={styles.content}>
                Tesseract is the one stop marketplace for discovering state of the art Generative AI models.
                </div>
                <Link href="/discover">
                    <a className={cn("button-empty", styles.search)}>
                        start your search
                    </a>
                </Link>
            </div>
        </div>
        <div className={styles.wrapper}>
            <Swiper
                navigation={true}
                loop={false}
                modules={[Navigation, Scrollbar]}
                className="vertical-swiper"
                direction="vertical"
                scrollbar={{
                    hide: true,
                }}
                speed={700}
                breakpoints={{
                    320: {
                        direction: "horizontal",
                    },
                    1024: {
                        direction: "vertical",
                    },
                }}
            >
                {list.map((x, index) => (
                    <SwiperSlide key={index}>
                        <Item item={x} key={index} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </>
);

export default Main;
