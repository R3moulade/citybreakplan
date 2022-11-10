import styles from "./Category.module.css"

export default function Category(props) {


    return (
        <div className={styles.categoryCard}>
            <p>{props.title}</p>
            <p>test</p>
            <h3>testtt</h3>
        </div>
    )
}