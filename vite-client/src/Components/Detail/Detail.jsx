// styles
import styles from './Detail.module.css';
// hooks and tools
import { Link } from 'react-router-dom';
import { ROUTES } from '../../helpers/ROUTES';


const Detail = (props) => {
    const {id, name, image, hp, attack, defense, speed, height, weight, Types} = props.pokemon

    return(
        <div>
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <h5>Health: {hp}</h5>
            <h5>Attack: {attack}</h5>
            <h5>Defense: {defense}</h5>
            <h5>Speed: {speed ? speed : '-'}</h5>
            <h5>Height: {height ? height : '-'}</h5>
            <h5>Weight: {weight ? weight : '-'}</h5>
            <div className={styles.typesDiv}>
                {Types.map((type, index) => {
                    return (<div key={index} className={styles.typeTag}>{type.name}</div>)
                })}
            </div>
            <Link to={ROUTES.home}>
                <div>{'<< HOME'}</div>
            </Link>
        </div>
    )
}

export default Detail;