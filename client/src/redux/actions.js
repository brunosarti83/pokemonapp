// api_requests
import getAllPokemons from '../api_requests/getAllPokemons';

// actions
export const GET_POKEMONS = 'GET_POKEMONS';


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