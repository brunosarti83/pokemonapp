import axios from 'axios';

const getPokemonDetail = async (id) => {
    try {
        const url = '/pokemons/' + id
        const { data } = await axios.get(url)
        return data
        
    } catch (error) {
        throw error
    }
}

export default getPokemonDetail;