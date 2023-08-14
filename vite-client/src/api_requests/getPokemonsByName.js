import axios from 'axios';

const getPokemonsByName = async (name) => {
    try {
        const url = `/pokemons?name=${name}`
        const { data } = await axios.get(url)
        if (!data.length) {
            window.alert(`No matches found containig ${name}`)
        }
        return data

    } catch (error) {
        throw error
    }
}

export default getPokemonsByName;