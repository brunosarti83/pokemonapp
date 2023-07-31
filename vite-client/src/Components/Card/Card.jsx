// styles
import styles from './Card.module.css';
// hooks and tools
import { Link } from 'react-router-dom';
import { ROUTES } from '../../helpers/ROUTES';

const Card = (props) => {
    const { id, name, image, types } = props

    return (
        <div className={styles.Container}>
            <Link to={ROUTES.detail + id}>
                <img src={image} alt={`${name}`} />
            </Link>
            <div className={styles.Name}>{name}</div>
            <div className={styles.Types}>
                {types.map((type, index) => {
                    return (<div key={index} className={styles.typeTag}>{type.name}</div>)
                })}
            </div>
        </div>
    )
}

export default Card;

