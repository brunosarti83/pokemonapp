import axios from 'axios';

const getAllPokemons = async () => {
    try {
        const url = '/pokemons'
        const { data } = await axios.get(url)
        return data
    } catch (error) {
        throw error
    }
}

export default getAllPokemons;