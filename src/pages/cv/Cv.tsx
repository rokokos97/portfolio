import styles from './cv.module.scss'

function Cv () {
    return (
        <article className={styles.article}>
            <section className={styles.columnLeft}>
                <div>
                    <img src="" alt="busines photo" />
                </div>
            </section>
            <section className={styles.columnRigth}>
                <div>
                    <h1 className={styles.title}>Lisovyi Rostyslav</h1>
                    <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </h2>
                </div>
            </section>
        </article>
    )
}

export default Cv