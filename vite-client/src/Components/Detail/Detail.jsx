// styles
import styles from './Detail.module.css';
// hooks and tools
import { Link } from 'react-router-dom';
import { ROUTES } from '../../helpers/ROUTES';
// components
import TypeTag from '../TypeTag/TypeTag';


const Detail = (props) => {
    const { id, name, image, hp, attack, defense, speed, height, weight, Types } = props.pokemon
    const userGenerated = !Boolean(Number(id))
    const sizeVar = ((name.length - 10) * -2) + 16
    const sizeFix = ((750 / name.length) * 1.6) 
    document.documentElement.style.setProperty('--name-size-var', `${sizeVar}dvw`)
    document.documentElement.style.setProperty('--name-size-fix', `${sizeFix}px`)

    return (
        <div className={(Types.length < 3) ? styles.container : styles.containerBig}>
            <div className={styles.Heading}></div>
            <div className={styles.detailWrapper}>
                <div className={styles.imgAndName}>
                    <img id={(userGenerated) ? styles.imageU : styles.image} src={image} alt={name} />
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
                        return (<TypeTag key={index} typeName={type.name}/>)
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