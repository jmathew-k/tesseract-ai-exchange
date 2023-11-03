import styles from "./Details.module.sass";

type DetailsProps = {
    collection: string;
    price: string;
    reserve: string;
};

const Details = ({ collection, price, reserve }: DetailsProps) => (
    <div className={styles.details}>
        <div className={styles.item}>
            <div className={styles.category}>Model Details</div>
            <div className={styles.value}>{collection}</div>
        </div>
        <div className={styles.item}>
            <div className={styles.category}>Model Runs</div>
            <div className={styles.value}>{price}</div>
        </div>
        <div className={styles.item}>
            <div className={styles.category}>Version</div>
            <div className={styles.value}>{reserve}</div>
        </div>
    </div>
);

export default Details;
