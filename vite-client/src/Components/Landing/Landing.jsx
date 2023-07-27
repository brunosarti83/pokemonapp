// estilos
import styles from './Landing.module.css';
// hooks, tools
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../helpers/ROUTES';

 const Landing = () => {

    return (
        <>
            <h1>This is Landing</h1>
            <NavLink to={ROUTES.home}>
                <div>toHome</div>
            </NavLink>
        </>
    )
}

export default Landing;