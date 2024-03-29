import Link from "next/link";
import cn from "classnames";
import styles from "./Dream.module.sass";
import Image from "@/components/Image";

type DreamProps = {};

const Dream = ({}: DreamProps) => (
    <div className={styles.dream}>
        <div className={styles.wrap}>
            <div className={styles.details}>
                <div className={styles.item}>
                    <div className={styles.avatar}>
                        <Image
                            src="/images/artists/artist-1.jpg"
                            layout="fill"
                            objectFit="cover"
                            alt="Avatar"
                        />
                    </div>
                    @tron77
                </div>
                <div className={styles.item}>
                    <div className={styles.image}>
                        <Image
                            src="/images/escape.jpg"
                            layout="fill"
                            objectFit="cover"
                            alt="Avatar"
                        />
                    </div>
                    Escape
                </div>
            </div>
            <div className={cn("h1", styles.title)}>MPT-7B</div>
            <div className={styles.line}>
                <div className={styles.box}>
                    <div className={styles.text}>Total Runs</div>
                    <div className={cn("h3", styles.crypto)}>89814</div>
                    <div className={styles.price}>Language Model</div>
                </div>
                <Link href="/make-offer">
                    <a className={cn("button-white", styles.button)}>
                        Demo
                    </a>
                </Link>
            </div>
        </div>
        <div className={styles.preview}>
            <Image
                src="/images/balls.jpg"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
                alt="Avatar"
            />
        </div>
    </div>
);

export default Dream;
