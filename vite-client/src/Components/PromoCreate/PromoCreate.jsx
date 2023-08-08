// styles 
import styles from './PromoCreate.module.css';
// hooks and tools
import { Link } from 'react-router-dom';
import { ROUTES } from '../../helpers/ROUTES';

const PromoCreate = () => {

    return (
        <div className={styles.Container}>
            <div className={styles.image}></div>
            <h1 className={styles.promoH1}>Create your own Pokemons !!</h1>
            <h3 className={styles.promoH3}>Now you can try our new Pokemon Factory</h3>
            <h4 className={styles.promoH4}>Try it and make your creations available to everyone</h4>
            <Link to={ROUTES.create} className={styles.createButton}>
                <div className={styles.createText}>Create!</div>
            </Link>
        </div>
    )
}

export default PromoCreate