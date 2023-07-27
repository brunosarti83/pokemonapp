// hooks and tools
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Components
import Card from '../Card/Card';
// actions
import { getPokemons } from '../../redux/actions';
// styles
import styles from './Cards.module.css';


const Cards = () => {

    const allPokemons = useSelector((state) => state.allPokemons)
    const [pag, setPag] = useState(1)
    const [nowShowing, setNowShowing] = useState([])
    const dispatch = useDispatch()

    const pokemonsPerPage = 12

    useEffect(() => {
        dispatch(getPokemons())
    }, [])

    useEffect(() => {
        const indexTo = (pokemonsPerPage * pag) - 1
        const indexFrom = indexTo - 11
        const thisPagePokemons = allPokemons.slice(indexFrom, indexTo)
        setNowShowing(thisPagePokemons)
    }, [pag, allPokemons])

    const previousPage = () => {
        setPag(pag-1)
    } 

    const nextPage = () => {
        setPag(pag+1)
    } 

    return (
        <div>
            <h1>This is Cards</h1>
            <div>
                { nowShowing.map(pokemon => {
                    return <Card key={pokemon.id}
                        id={pokemon.id}
                        name={pokemon.name}
                        image={pokemon.image}
                        types={pokemon.Types} />
                })
                }
            </div>
            <div className={styles.buttons}>
                <div className={(pag > 1) ? styles.backButton : styles.noShow} onClick={previousPage}>Back</div>
                <div className={(pag * pokemonsPerPage < allPokemons.length) ? styles.nextButton : styles.noShow} onClick={nextPage}>Next</div>
            </div>
        </div>
    )
}

export default Cards;