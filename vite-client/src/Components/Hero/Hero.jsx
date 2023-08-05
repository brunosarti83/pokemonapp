// styles
import styles from './Hero.module.css';


const Hero = () => {

    return (
        <div className={styles.Container}>
            <h1 className={styles.heroH1}>Welcome to your Pokemon App</h1>
            <h3 className={styles.heroH3}>You can find all Pokemons here along with their detail information</h3>
            <h4 className={styles.heroH4}>Search them by name or use our filters to find your favorites</h4>
            <div className={styles.image}></div>
        </div>
    )
}

export default Hero;