// styles
import styles from './NavBar.module.css';
// components
import SearchBar from '../SearchBar/SearchBar';
// hooks and tools
import { Link } from 'react-router-dom';
import { ROUTES } from '../../helpers/ROUTES';

const NavBar = () => {

    return (
        <div className={styles.Container}>
            <div className={styles.linkBar}>
                <ul>
                    <li>
                        <Link to={ROUTES.home} className={styles.Link}>
                            <h4 className={styles.NavH4}>Home</h4>
                        </Link>
                    </li>
                    <li>
                        <Link to={ROUTES.create} className={styles.Link}>
                            <h4 className={styles.NavH4}>Create</h4>
                        </Link>
                    </li>
                    <li className={styles.lastLi}>
                        <span className={styles.by}>by Bruno</span>
                    </li>
                </ul>
            </div>
            <div className={styles.Search}>
                <SearchBar />
            </div>
        </div>
    )
}

export default NavBar;