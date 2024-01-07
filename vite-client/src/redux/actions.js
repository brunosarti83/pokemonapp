// api_requests
import getPokemonsByName from '../api_requests/getPokemonsByName';
import getAllPokemons from '../api_requests/getAllPokemons';

// actions
export const GET_POKEMONS = 'GET_POKEMONS';
export const FILTER_POKEMONS = 'FILTER_POKEMONS';
export const GET_BY_NAME = 'GET_BY_NAME';
export const RELOAD = 'RELOAD';
export const SET_PAGE = 'SET_PAGE';
export const SET_LOADING = 'SET_LOADING';
export const SET_DETAILPOKEMON = 'SET_DETAILPOKEMON';


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

export const reload = () => {
    return {
        type: RELOAD,
        payload: ''
    }
}

export const setPage = (page) => {
    return {
        type: SET_PAGE,
        payload: page
    }
}

export const setLoading = (state) => {
    return {
        type: SET_LOADING,
        payload: state
    }
}

export const setDetailPokemon = (pokemon) => {
    return {
        type: SET_DETAILPOKEMON,
        payload: pokemon
    }
}

