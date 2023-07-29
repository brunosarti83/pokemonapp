// api_requests
import getPokemonsByName from '../api_requests/getPokemonsByName';
import getAllPokemons from '../api_requests/getAllPokemons';

// actions
export const GET_POKEMONS = 'GET_POKEMONS';
export const FILTER_POKEMONS = 'FILTER_POKEMONS';
export const GET_BY_NAME = 'GET_BY_NAME';


export const getPokemons = () => {
    return async (dispatch) => {
        try {
            const allPokemons = await getAllPokemons()
            return dispatch({
                type: GET_POKEMONS,
                payload: allPokemons
            })
        } catch (error) {
            window.alert(error.message)
        }
    }
}

export const filterPokemons = (filterObj) => {
    return {
        type: FILTER_POKEMONS,
        payload: filterObj
    }
}

export const getByName = (name) => {
    return async (dispatch) => {
        try {
            const pokemons = await getPokemonsByName(name)
            return dispatch({
                type: GET_BY_NAME,
                payload: pokemons
            })
        } catch (error) {
            window.alert(error.message)
        }
    }
}



