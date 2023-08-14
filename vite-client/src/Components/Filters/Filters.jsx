//styles
import styles from './Filters.module.css';
// hooks and tools
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getAllTypes from '../../api_requests/getAllTypes';
// actions
import { filterPokemons, reload } from '../../redux/actions';
// images
import filterImage from '../../images/filter-image.png';



const Filters = () => {

    const reduxFilter = useSelector(state => state.reduxFilter)
    const dispatch = useDispatch()
    const [types, setTypes] = useState([])
    const [filterObj, setFilterObj] = useState(reduxFilter)

    useEffect(() => {
        const getTypes = async () => {
            const allTypes = await getAllTypes()
            setTypes(allTypes)
        }
        getTypes()
    }, [])

    useEffect(() => {
        dispatch(filterPokemons(filterObj))
    }, [filterObj])

    useEffect(()=> {
        setFilterObj(reduxFilter)
    },[reduxFilter])

    const capitalize = (string => string.charAt(0).toUpperCase() + string.slice(1))

    const handleFilters = (event) => {
        const prop = event.target.name
        const value = event.target.value
        const newFilterObj = { ...filterObj, [prop]: value }
        if (prop === 'orderBy') {
            if (value === 'none') {
                newFilterObj.direction = 'none'
            } else {
                newFilterObj.direction = 'A'
            }
        }
        setFilterObj(newFilterObj)
    }

    const handleDirection = (order) => {
        setFilterObj({...filterObj, direction: order})
    }

    const handleReset = () => {
        setFilterObj({
            type: 'all',
            origin: 'all',
            orderBy: 'none',
            direction: 'none',
        })
    }

    const handleReload = () => {
        dispatch(reload())
        handleReset()
    }


    return (
        <div className={styles.Container}>
            <h4 className={styles.firstParag}>Filter characters of a certain Type or based on weather they are user-created</h4>
            <img className={styles.filterImage} src={filterImage} alt="dragon-image" />
            <div className={styles.wrapper}>
                <div className={styles.filters}>
                    <label className={styles.typeLabel} htmlFor="type">Type: </label>
                    <select className={styles.typeSelect} name="type" id="type" onChange={handleFilters} value={filterObj.type}>
                        <option value="all">- All -</option>
                        {types?.map(type => {
                            return (
                                <option key={type.id} value={type.name}>-{capitalize(type.name)}-</option>
                            )
                        })
                        }
                    </select>

                    <label className={styles.originLabel} htmlFor="origin">Origin: </label>
                    <select className={styles.originSelect} name="origin" id="origin" onChange={handleFilters} value={filterObj.origin}>
                        <option value="all">- All -</option>
                        <option value="original">Original</option>
                        <option value="custom">Custom</option>
                    </select>

                </div>
                <br />
                <div className={styles.order}>
                    <div className={styles.orderByDiv}>
                        <label className={styles.orderBy} htmlFor="orderBy">Order by: </label>
                        <select name="orderBy" id="orderBy" onChange={handleFilters} value={filterObj.orderBy}>
                            <option value="none">-None-</option>
                            <option value="name">Name</option>
                            <option value="attack">Attack</option>
                        </select>
                        <div className={styles.orderAD}>
                            <span id={styles.Asc} className={(filterObj.orderBy !== 'none' && filterObj.direction === 'A') ? styles.on : styles.off} onClick={()=>handleDirection('A')}>A↑</span>
                            <span id={styles.Desc} className={(filterObj.orderBy !== 'none' && filterObj.direction === 'D') ? styles.on : styles.off} onClick={()=>handleDirection('D')}>D↓</span>
                        </div>
                    </div>
                </div>
                <div className={styles.controls}>
                    <div className={styles.reload} onClick={handleReload}>Reload All</div>
                    <div className={styles.reset} onClick={handleReset}>Reset Filters</div>
                </div>
            </div>
        </div>
    )
}

export default Filters;