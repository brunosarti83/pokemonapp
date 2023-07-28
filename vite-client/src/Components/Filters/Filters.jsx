//styles
import styles from './Filters.module.css';
// hooks and tools
import { useState, useEffect } from 'react';
import getAllTypes from '../../api_requests/getAllTypes';


const Filters = () => {

    const [types, setTypes] = useState([])
    const [filterObj, setFilterObj] = useState({
        type: 'all',
        origin: 'all',
        orderBy: 'name',
        direction: 'A',
    })

    useEffect(() => {
        const getTypes = async () => {
            const allTypes = await getAllTypes()
            setTypes(allTypes)
        }
        getTypes()
    }, [])

    const capitalize = (string => string.charAt(0).toUpperCase() + string.slice(1))

    const handleFilters = (event) => {
        const prop = event.target.name 
        const value = event.target.value 
        setFilterObj({...filterObj, [prop]: value})
    }

    return (
        <div className={styles.container}>
            <div className={styles.filters}>
                <h4>Filters</h4>
                <div className={styles.Type}>
                    <label htmlFor="type">Type: </label>
                    <select name="type" id="type" onChange={handleFilters}>
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
                    <select name="origin" id="origin" onChange={handleFilters}>
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
                    <select name="orderBy" id="order-by" onChange={handleFilters}>
                        <option value="name">-Name-</option>
                        <option value="attack">Attack</option>
                    </select>
                    <select name="direction" id="order-dir" onChange={handleFilters}>
                        <option value="A">-Ascending-</option>
                        <option value="D">Descending</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Filters;