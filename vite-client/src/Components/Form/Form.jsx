// styles
import styles from './Form.module.css';
// hooks
import { useState, useEffect } from 'react';
// api-requests
import getAllTypes from '../../api_requests/getAllTypes';
// validator
import validate from '../../helpers/validate';

const Form = () => {

    const [types, setTypes] = useState([])
    const [pokemon, setPokemon] = useState({
        name: '',
        hp: 100,
        attack: 50,
        defense: 50,
        speed: 50,
        height: undefined,
        weight: undefined,
        image: '',
        types: []
    })
    const [errors, setErrors] = useState({
        name: '',
        hp: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        stats: '',
        image: '',
        types: ''
    })

    useEffect(() => {
        getAllTypes()
        .then(typesObj => {
            setTypes(typesObj)
        })
        .catch(error => {
            window.alert('Unable to load Pokemon types') 
        })
    },[])


    const handleChange = (e) => {
        const prop = e.target.name;
        const val = e.target.value;
        setPokemon({...pokemon, [prop]: val})
        setErrors(validate({...pokemon, [prop]: val}))
    }

    const handleTypes = (e) => {
        console.log('types')
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('submit')
    }

    return (
        <div className={styles.container}>
            <div className={styles.formWrapper}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='name'>Pokemon's name:</label>
                        <input name='name' type='text' value={pokemon.name} onChange={handleChange} />
                        <span className={styles.errors}>{errors.name}</span>
                    </div>
                    <div>
                        <label htmlFor='hp'>Health points:</label>
                        <input name='hp' type='range' min='0' max='200' value={pokemon.hp} onChange={handleChange} />
                        <span className={styles.errors}>{errors.hp}</span>
                    </div>
                    <div>
                        <label htmlFor='attack'>Attack points:</label>
                        <input name='attack' type='range' min='0' max='200' value={pokemon.attack} onChange={handleChange} />
                        <span className={styles.errors}>{errors.attack}</span>
                    </div>
                    <div>
                        <label htmlFor='defense'>Defense points:</label>
                        <input name='defense' type='range' min='0' max='200' value={pokemon.defense} onChange={handleChange} />
                        <span className={styles.errors}>{errors.defense}</span>
                    </div>
                    <div>
                        <label htmlFor='speed'>Speed points:</label>
                        <input name='speed' type='range' min='0' max='200' value={pokemon.speed} onChange={handleChange} />
                        <span className={styles.errors}>{errors.speed}</span>
                    </div>
                    <span className={styles.errors}>{errors.stats}</span>
                    <div>
                        <label htmlFor='height'>Height (inches):</label>
                        <input name='height' type='number' value={pokemon.height} onChange={handleChange} />
                        <span className={styles.errors}>{errors.height}</span>
                    </div>
                    <div>
                        <label htmlFor='weight'>Weight (pounds):</label>
                        <input name='weight' type='number' value={pokemon.weight} onChange={handleChange} />
                        <span className={styles.errors}>{errors.weight}</span>
                    </div>
                    <div>
                        <label htmlFor='image'>Image (url):</label>
                        <input name='image' type='text' value={pokemon.image} onChange={handleChange} />
                        <span className={styles.errors}>{errors.image}</span>
                    </div>
                    <div className={styles.typesSelector}>
                        {(types.length) && types.map((type) => {
                            return (
                                <div key={type.id} 
                                className={pokemon.types.includes(type.id) ? styles.typeTagOn : styles.typeTagOff} 
                                onClick={handleTypes}>{type.name}</div>
                            )
                        })}
                    </div>
                    <span className={styles.errors}>{errors.types}</span>
                    <div className={styles.buttonsDiv}>
                        <button className={styles.submit}  type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form; 