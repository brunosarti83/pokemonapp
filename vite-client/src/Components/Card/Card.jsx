// styles
import styles from './Card.module.css';
// hooks and tools
import { Link } from 'react-router-dom';
import { ROUTES } from '../../helpers/ROUTES';
// components
import TypeTag from '../TypeTag/TypeTag';

const Card = (props) => {
    const { id, name, image, types } = props
    const userGenerated = !Boolean(Number(id))

    return (
        <div className={styles.bigContainer}>
            <div className={styles.margin}></div>
            <div className={styles.otherMargin}></div>
            <div className={styles.Container}>
                <div className={styles.margin}></div>
                <div className={userGenerated ? styles.imageWrapU : styles.imageWrap}>
                    <Link to={ROUTES.detail + id}>
                        <img src={image} alt={`${name}`} />
                    </Link>
                </div>
                <div className={styles.Name}>{name}</div>
                <div className={styles.Types}>
                    {types.map((type, index) => {
                        return (<TypeTag key={index} typeName={type.name}/>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default Card;

