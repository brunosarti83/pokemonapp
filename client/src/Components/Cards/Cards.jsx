// hooks and tools
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// Components
import Card from '../Card/Card';

const Cards = () => {

    const allPokemons = useSelector((state) => state.allPokemons)
    const [pag, setPag] = useState(1)
    const [nowShowing, setNowShowing] = useState([])

    useEffect(() => {
        const indexFrom = pag - 1 // included
        const indexTo = ((allPokemons.length - 1) > (pag + 11)) ? (pag + 11) : (allPokemons.length - 1) // excluded
        const thisPagePokemons = allPokemons.slice(indexFrom, indexTo)
        setNowShowing(thisPagePokemons)
    }, [pag])

    return (
        <div>
            <h1>This is Cards</h1>
            <div>
                {nowShowing.map(pokemon => {
                    return <Card key={pokemon.id}
                        id={pokemon.id}
                        name={pokemon.name}
                        image={pokemon.image}
                        types={pokemon.Types} />
                })
                }
            </div>
        </div>
    )
}

export default Cards;