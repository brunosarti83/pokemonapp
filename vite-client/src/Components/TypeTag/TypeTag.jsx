//styles
import styles from './TypeTag.module.css';
// hooks and tools
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../helpers/ROUTES';
// actions
import { filterPokemons } from '../../redux/actions';

const TypeTag = (props) => {
    const { typeName } = props
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const filterObj = {
        type: 'all',
        origin: 'all',
        orderBy: 'none',
        direction: 'none',
    }

    const handleType = (e) => {
        dispatch(filterPokemons({...filterObj, type: e.target.id}))
        navigate(ROUTES.home)
    }


    return (
        <div id={typeName} className={styles.typeTag} onClick={handleType}>{typeName}</div>
    )
}

export default TypeTag;