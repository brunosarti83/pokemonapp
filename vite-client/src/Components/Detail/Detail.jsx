// styles
import styles from './Detail.module.css';
// hooks and tools
import { Link } from 'react-router-dom';
import { ROUTES } from '../../helpers/ROUTES';


const Detail = (props) => {
    const { id, name, image, hp, attack, defense, speed, height, weight, Types } = props.pokemon

    return (
        <div className={styles.container}>
            <div className={styles.Heading}></div>
            <div className={styles.detailWrapper}>
                <div className={styles.imgAndName}>
                    <img id={styles.image} src={image} alt={name} />
                    <h4 id={styles.name}>{name}</h4>
                </div>
                <div id={styles.stats}>
                    <h5 className={styles.stat} >Health: {hp}</h5>
                    <h5 className={styles.stat} >Attack: {attack}</h5>
                    <h5 className={styles.stat} >Defense: {defense}</h5>
                    <h5 className={styles.stat} >Speed: {speed ? speed : '-'}</h5>
                    <h5 className={styles.stat} >Height: {height ? `${height} in.` : '-'}</h5>
                    <h5 className={styles.stat} >Weight: {weight ? `${weight} lb.` : '-'}</h5>
                </div>
                <div className={styles.Types}>
                    {Types.map((type, index) => {
                        return (<div key={index} className={styles.typeTag}>{type.name}</div>)
                    })}
                </div>
            </div>
            <Link className={styles.homeButton} to={ROUTES.home}>
                <div>{'HOME'}</div>
            </Link>
        </div>
    )
}

export default Detail;