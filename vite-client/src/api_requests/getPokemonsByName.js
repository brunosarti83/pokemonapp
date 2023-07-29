import axios from 'axios';

const getPokemonsByName = async (name) => {
    try {
        const url = `/pokemons?name=${name}`
        const { data } = await axios.get(url)
        return data

    } catch (error) {
        throw error
    }
}

export default getPokemonsByName;