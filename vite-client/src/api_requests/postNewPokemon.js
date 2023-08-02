import axios from 'axios';

const postNewPokemon = async (pokemon) => {
    try {
        const url = `/pokemons`
        const { data } = await axios.post(url, pokemon)
        return data

    } catch (error) {
        throw error
    }
}

export default postNewPokemon;