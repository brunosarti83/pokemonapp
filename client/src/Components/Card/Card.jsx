// styles
import styles from './Card.module.css';

const Card = (props) => {
    const { id, name, image, types } = props

    return (
        <div className={styles.Container}>
            <img src={image} alt={`${name}`} />
            <div className={styles.Name}>{name}</div>
            <div className={styles.Types}>
                {types.map(type => {
                    return <div className={styles.typeTag}>{type}</div>
                })}
            </div>
        </div>
    )
}

export default Card;

