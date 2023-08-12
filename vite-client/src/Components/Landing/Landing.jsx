// estilos
import styles from './Landing.module.css';
// hooks, tools
import { Link } from 'react-router-dom';
import { ROUTES } from '../../helpers/ROUTES';
// images
import pokeLogo from '../../images/black-pokemon-logo-transparent-27.png';

const Landing = () => {

    return (
        <div className={styles.Container}>
            <div className={styles.Wrapper}>
                <div className={styles.logoSector}>
                    <img className={styles.logo} src={pokeLogo} alt='Pokemon-logo' />
                </div>
                <div className={styles.intro}>
                    <h2 className={styles.line2}>Over 1.000 characters!!</h2>
                    <br />
                    <h4 className={styles.finalLine}>Learn everything you want to know. And we might even let you build your own creatures</h4>
                    <Link className={styles.Link} to={ROUTES.home}>
                        <div className={styles.buttonDiv}>get Inside</div>
                    </Link>
                </div>
                <div className={styles.landingImg}></div>
            </div>
        </div>
    )
}

export default Landing;