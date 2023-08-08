// styles
import styles from './HomeView.module.css';
// Components
import NavBar from '../../Components/NavBar/NavBar';
import Hero from '../../Components/Hero/Hero';
import Filters from '../../Components/Filters/Filters';
import Cards from '../../Components/Cards/Cards';
import PromoCreate from '../../Components/PromoCreate/PromoCreate';


const HomeView = () => {

    return (
        <div className={styles.background}>
            <NavBar/>
            <Hero/>
            <PromoCreate/>
            <Filters/>
            <Cards/>
        </div>
    )
}

export default HomeView;