//styles
import styles from './Filters.module.css';
// hooks and tools
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import getAllTypes from '../../api_requests/getAllTypes';
// actions
import { filterPokemons } from '../../redux/actions';


const Filters = () => {

    const dispatch = useDispatch()
    const [types, setTypes] = useState([])
    const [filterObj, setFilterObj] = useState({
        type: 'all',
        origin: 'all',
        orderBy: 'none',
        direction: 'none',
    })

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

    const capitalize = (string => string.charAt(0).toUpperCase() + string.slice(1))

    const handleFilters = (event) => {
        const prop = event.target.name 
        const value = event.target.value 
        const newFilterObj = {...filterObj, [prop]: value}
        if (prop === 'orderBy') {
            if (value === 'none') {
                newFilterObj.direction = 'none'
            } else {
                newFilterObj.direction = 'A'
            }
        }
        setFilterObj(newFilterObj)
    }

    const handleReset = () => {
        setFilterObj({
            type: 'all',
            origin: 'all',
            orderBy: 'none',
            direction: 'none',
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.filters}>
                <h4>Filters</h4>
                <div className={styles.Type}>
                    <label htmlFor="type">Type: </label>
                    <select name="type" id="type" onChange={handleFilters} value={filterObj.type}>
                        <option value="all">- All -</option>
                        { types?.map(type => {
                                return (
                                    <option key={type.id} value={type.name}>-{capitalize(type.name)}-</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className={styles.origin}>
                    <label htmlFor="origin">Origin: </label>
                    <select name="origin" id="origin" onChange={handleFilters} value={filterObj.origin}>
                        <option value="all">- All -</option>
                        <option value="original">Original</option>
                        <option value="custom">Custom</option>
                    </select>
                </div>
            </div>
            <br />
            <div className={styles.order}>
                <div className={styles.orderBy}>
                    <label htmlFor="orderBy">Order by: </label>
                    <select name="orderBy" id="order-by" onChange={handleFilters} value={filterObj.orderBy}>
                        <option value="none">-None-</option>
                        <option value="name">Name</option>
                        <option value="attack">Attack</option>
                    </select>
                    <select name="direction" id="order-dir" onChange={handleFilters} value={filterObj.direction}>
                        <option value="none">---------</option>
                        <option value="A">-Ascending-</option>
                        <option value="D">Descending</option>
                    </select>
                </div>
            </div>
            <div className={styles.controls}>
                <div className={styles.reset} onClick={handleReset}>Reset</div>
            </div>
        </div>
    )
}

export default Filters;