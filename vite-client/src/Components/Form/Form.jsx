// styles
import styles from './Form.module.css';
// hooks and tools
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ROUTES } from '../../helpers/ROUTES';
// actions
import { getPokemons } from '../../redux/actions';
// api-requests
import getAllTypes from '../../api_requests/getAllTypes';
import postNewPokemon from '../../api_requests/postNewPokemon';
// validator
import validate from '../../helpers/validate';
// libraries
import axios from 'axios';


const Form = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [showPreview, setShowPreview] = useState(false)
    const [types, setTypes] = useState([])
    const [pokemon, setPokemon] = useState({
        name: '',
        hp: 50,
        attack: 50,
        defense: 50,
        speed: 50,
        height: '',
        weight: '',
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
                window.alert(`Unable to load Pokemon types: ${error.message}`)
            })
    }, [])


    const handleChange = (e) => {
        const prop = e.target.name;
        const val = e.target.value;
        setPokemon({ ...pokemon, [prop]: val })
        setErrors(validate({ ...pokemon, [prop]: val }, prop, { ...errors }))
    }

    const handleTypes = (e) => {
        const typeId = Number(e.target.id)
        const currentTypes = [...pokemon.types]
        let newTypes = []
        if (currentTypes.includes(typeId)) {
            newTypes = currentTypes.filter(type => type !== typeId)
        } else {
            newTypes = [...currentTypes, typeId]
        }
        setPokemon({ ...pokemon, types: newTypes })
        setErrors(validate({ ...pokemon, types: newTypes }, 'types', { ...errors }))
    }

    const onPreview = async () => {
        const url = pokemon.image
        try {
            setErrors({...errors, image:''})
            document.documentElement.style.setProperty('--imagePreview', `url(${pokemon.image})`)
            setShowPreview(true)
        } catch (error) {
            setErrors({...errors, image: `Unable to check image, probably due to CORS`})
            setShowPreview(false)
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        for (const prop in pokemon) {
            if (!pokemon[prop]) {
                window.alert(`${prop.toUpperCase()} cannot be empty`)
                return
            }
        }
        for (const prop in errors) {
            if (errors[prop]) {
                window.alert(`${errors[prop]}`)
                return
            }
        }
        if (!pokemon.types.length) {
            window.alert('Your Pokemon must belong to at least 2 Types')
            return
        }
        try {
            const response = await postNewPokemon(pokemon)
            dispatch(getPokemons())
            navigate(ROUTES.detail + response.id)
        } catch (error) {
            window.alert(`Unable to post Pokemon: ${error.message}`)
        }
    }

    const handleImageUpload = async (e) => {

        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'brunoprueba1983');     
        try {
          const response = await axios.post(
            `https://api.cloudinary.com/v1_1/daiztctac/upload`,
            formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            }
          );
          setPokemon({...pokemon, image: response.data.secure_url});
          
        } catch (error) {
          window.alert('Error uploading image:', error.message);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.Heading}></div>
            <div className={styles.formWrapper}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.notTypes}>
                        <div className={styles.selectorDiv}>
                            <label className={styles.nameLabel} htmlFor='name'>Pokemon's name:</label>
                            <input name='name' type='text' value={pokemon.name} onChange={handleChange} />
                        </div>
                        <span className={styles.errors}>{errors.name}</span>
                        <div className={styles.StatsDiv}>
                            <div className={styles.selectorDiv}>
                                <label className={styles.healthLabel} htmlFor='hp'>Health points:</label>
                                <input name='hp' type='range' min='0' max='200' value={pokemon.hp} onChange={handleChange} />
                                <span className={styles.rangeLabel}>{pokemon.hp}</span><br />
                            </div>
                            <span className={styles.errors}>{errors.hp}</span>
                            <div className={styles.selectorDiv}>
                                <label className={styles.attackLabel} htmlFor='attack'>Attack points:</label>
                                <input name='attack' type='range' min='0' max='200' value={pokemon.attack} onChange={handleChange} />
                                <span className={styles.rangeLabel}>{pokemon.attack}</span><br />
                            </div>
                            <span className={styles.errors}>{errors.attack}</span>
                            <div className={styles.selectorDiv}>
                                <label className={styles.defenseLabel} htmlFor='defense'>Defense points:</label>
                                <input name='defense' type='range' min='0' max='200' value={pokemon.defense} onChange={handleChange} />
                                <span className={styles.rangeLabel}>{pokemon.defense}</span><br />
                            </div>
                            <span className={styles.errors}>{errors.defense}</span>
                            <div className={styles.selectorDiv}>
                                <label className={styles.speedLabel} htmlFor='speed'>Speed points:</label>
                                <input name='speed' type='range' min='0' max='200' value={pokemon.speed} onChange={handleChange} />
                                <span className={styles.rangeLabel}>{pokemon.speed}</span><br />
                            </div>
                            <span className={styles.errors}>{errors.speed}</span>
                            <span className={styles.errors}>{errors.stats}</span>
                        </div>
                        <div className={styles.selectorDiv}>
                            <label className={styles.heightLabel} htmlFor='height'>Height (inches):</label>
                            <input name='height' type='number' value={pokemon.height} onChange={handleChange} />
                        </div>
                        <span className={styles.errors}>{errors.height}</span>
                        <div className={styles.selectorDiv}>
                            <label className={styles.weightLabel} htmlFor='weight'>Weight (pounds):</label>
                            <input name='weight' type='number' value={pokemon.weight} onChange={handleChange} />
                        </div>
                        <span className={styles.errors}>{errors.weight}</span>
                        <div className={styles.imageSelectorDiv}>
                            <label className={styles.imageLabel} htmlFor='image'>Image (url):</label>
                            <input name='image' type='text' value={pokemon.image} onChange={handleChange} />
                        </div>
                        <div className={styles.imageLoader}>
                            <input type="file" id="image" name="image"
                            accept=".jpg, .jpeg, .png" onChange={handleImageUpload}/>
                        </div>
                        <span className={styles.errors}>{errors.image}</span>
                        <div className={styles.previewButton} onClick={onPreview}>Preview</div>
                        <div className={(showPreview) ? styles.imagePreview : styles.noImage}></div>
                    </div>
                    <div className={styles.typesSelector}>
                        {(types.length) && types.map((tipo) => {
                            return (
                                <div key={tipo.id} id={tipo.id}
                                    className={pokemon.types.includes(tipo.id) ? styles.typeTagOn : styles.typeTagOff}
                                    onClick={handleTypes}>{tipo.name}</div>
                            )
                        })}
                    </div>
                    <span className={styles.errors}>{errors.types}</span>
                    <div className={styles.buttonsDiv}>
                        <button className={styles.submit} type='submit'>Submit</button>
                    </div>
                </form>
            </div>
            <Link className={styles.homeButton} to={ROUTES.home}>
                <div>{'HOME'}</div>
            </Link>
        </div>
    )
}

export default Form; 