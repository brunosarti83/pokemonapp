import { GET_POKEMONS, FILTER_POKEMONS, GET_BY_NAME, RELOAD, SET_PAGE, SET_LOADING, SET_DETAILPOKEMON } from './actions';

const initialState = {
    showPokemons: [],
    savedPokemons: [],
    allPokemons: [],
    detailPokemon: null,
    currentPage: 1,
    reduxFilter: {
        type: 'all',
        origin: 'all',
        orderBy: 'none',
        direction: 'none',
    },
    loading: false
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                showPokemons: action.payload,
                savedPokemons: action.payload,
                allPokemons: action.payload,
                loading: false
            }
        case FILTER_POKEMONS:
            const { type, origin, orderBy, direction } = action.payload
            if (state.reduxFilter.type !== type
                || state.reduxFilter.origin !== origin
                || state.reduxFilter.orderBy !== orderBy
                || state.reduxFilter.direction !== direction) {
                    let filtered = [...state.savedPokemons]
                    if (type !== 'all') {
                        filtered = filtered.filter(poke => poke.Types.some(tipo => tipo.name === type))
                    }
                    if (origin !== 'all') {
                        if (origin === 'original') {
                            filtered = filtered.filter(poke => (poke.api_id))
                        } else {
                            filtered = filtered.filter(poke => (!poke.api_id))
                        }
                    }
                    if (orderBy === 'name') {
                        filtered.sort((a, b) => {
                            if (a.name < b.name) {
                                return (direction === 'A') ? -1 : 1
                            } else if (a.name > b.name) {
                                return (direction === 'A') ? 1 : -1
                            } else {
                                return 0
                            }
                        })
                    } else if (orderBy === 'attack') {
                        filtered.sort((a, b) => {
                            if (a.attack < b.attack) {
                                return (direction === 'A') ? -1 : 1
                            } else if (a.attack > b.attack) {
                                return (direction === 'A') ? 1 : -1
                            } else {
                                return 0
                            }
                        })
                    }
                    return {
                        ...state,
                        showPokemons: filtered,
                        reduxFilter: action.payload,
                        currentPage: 1,
                        loading: false
                    }
                } else {
                    return state
                }

        case GET_BY_NAME: 
            return {
                ...state,
                showPokemons: action.payload,
                savedPokemons: action.payload,
                loading: false
            }
           

        case RELOAD:
            return {
                ...state,
                showPokemons: [...state.allPokemons],
                savedPokemons: [...state.allPokemons],
                currentPage: 1
            }

        case SET_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }

        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }

        case SET_DETAILPOKEMON:
            return {
                ...state,
                detailPokemon: action.payload
            }
        
        default:
            return state
    }
}

export default rootReducer;