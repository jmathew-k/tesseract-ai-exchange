import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import cn from "classnames";
import styles from "./Menu.module.sass";
import Modal from "@/components/Modal";
import NavLink from "@/components/NavLink";
import Icon from "@/components/Icon";
import Search from "../Search";

const socials = [
    {
        icon: "instagram-fat",
        url: "https://www.instagram.com/tesseract_xyz/",
    },
    {
        icon: "twitter-fat",
        url: "https://twitter.com/tesseract_xyz",
    },
    {
        icon: "facebook-fat",
        url: "https://www.facebook.com/tesseract_xyz/",
    },
    {
        icon: "linkedin-fat",
        url: "https://www.linkedin.com/company/tesseractxyz",
    },
];

const menu = [
    {
        title: "Discover",
        url: "/discover",
    },
    {
        title: "Create",
        url: "/create",
    },
    {
        title: "Feed",
        url: "/feed",
    },
    {
        title: "Help center",
        url: "/help",
    },
    {
        title: "Blog",
        url: "/blog",
    },
];

type MenuProps = {
    classBurger?: string;
    resultSearch?: any;
};

const Menu = ({ classBurger, resultSearch }: MenuProps) => {
    const [visibleMenu, setVisibleMenu] = useState<boolean>(false);

    const isTablet = useMediaQuery({
        query: "(max-width: 1023px)",
    });

    return (
        <>
            <button
                className={cn(styles.burger, classBurger)}
                onClick={() => setVisibleMenu(true)}
            ></button>
            <Modal
                className={styles.modal}
                closeClassName={styles.close}
                visible={visibleMenu}
                onClose={() => setVisibleMenu(false)}
            >
                <div className={styles.row}>
                    <div className={styles.col}>
                        <div className={cn("h1", styles.title)}>
                            Join our community
                        </div>
                        <div className={styles.socials}>
                            {socials.map((social, index) => (
                                <a
                                    className={styles.social}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key={index}
                                >
                                    <Icon name={social.icon} />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className={styles.col}>
                        {isTablet && (
                            <Search
                                className={styles.search}
                                result={resultSearch}
                            />
                        )}
                        <div className={styles.menu}>
                            {menu.map((link, index) => (
                                <NavLink
                                    className={cn(styles.link)}
                                    activeClassName={styles.active}
                                    href={link.url}
                                    key={index}
                                >
                                    {link.title}
                                </NavLink>
                            ))}
                        </div>
                        <div className={cn("h4", styles.info)}>
                            Download app
                        </div>
                        <div className={styles.btns}>
                            <a
                                className={cn("button", styles.button)}
                                href="https://tesseractxyz.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span>App Store</span>
                                <Icon name="apple" />
                            </a>
                            <a
                                className={cn("button-white", styles.button)}
                                href="https://tesseractxyz.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span>Play Store</span>
                                <Icon name="google-play" />
                            </a>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Menu;
