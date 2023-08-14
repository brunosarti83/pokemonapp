// styles
import styles from './Cards.module.css';
// hooks and tools
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Components
import Card from '../Card/Card';
import Loading from '../Loading/Loading';
// actions
import { getPokemons, setPage } from '../../redux/actions';


const Cards = () => {

    const showPokemons = useSelector((state) => state.showPokemons)
    const currentPage = useSelector((state) => state.currentPage)
    const [nowShowing, setNowShowing] = useState([])
    const dispatch = useDispatch()

    const pokemonsPerPage = 12

    useEffect(() => {
        if (!showPokemons.length) {
            dispatch(getPokemons())
            dispatch(setPage(1))
        }
    }, [])

    useEffect(() => {
        const indexTo = (pokemonsPerPage * currentPage)
        const indexFrom = indexTo - pokemonsPerPage
        const thisPagePokemons = showPokemons.slice(indexFrom, indexTo) // included, excluded
        setNowShowing(thisPagePokemons)
    }, [showPokemons, currentPage])

    const onPageClick = (page) => {
        dispatch(setPage(page))
    }


    const previousPage = () => {
        window.scrollTo({ top: 650, behavior: 'smooth' })
        dispatch(setPage(currentPage - 1))
    }

    const nextPage = () => {
        window.scrollTo({ top: 650, behavior: 'smooth' })
        dispatch(setPage(currentPage + 1))
    }

    return (
        <div>
            <div className={(showPokemons.length) ? styles.index : styles.noShow}>
                <div className={styles.pages}>
                    <span id={styles.pagesTitle}>Pages: </span>
                    <span id={(currentPage < 4) ? styles.noShow : styles.linktopage} onClick={()=>onPageClick(1)}>1,</span>
                    <span id={(currentPage < 5) ? styles.noShow : styles.prevDots}> ...</span>
                    <span id={(currentPage < 3) ? styles.noShow : styles.linktopage} onClick={()=>onPageClick(currentPage-2)}> {currentPage-2},</span>
                    <span id={(currentPage < 2) ? styles.noShow : styles.linktopage} onClick={()=>onPageClick(currentPage-1)}> {currentPage-1},</span>
                    <span id={styles.current}> {currentPage}{(currentPage !== Math.ceil(showPokemons.length / pokemonsPerPage) && ',')}</span>
                    <span id={(currentPage+1 >= Math.ceil(showPokemons.length / pokemonsPerPage)) ? styles.noShow : styles.linktopage} onClick={()=>onPageClick(currentPage+1)}> {currentPage+1},</span>
                    <span id={(currentPage+2 >= Math.ceil(showPokemons.length / pokemonsPerPage)) ? styles.noShow : styles.linktopage} onClick={()=>onPageClick(currentPage+2)}> {currentPage+2},</span>
                    <span id={(currentPage+3 >= Math.ceil(showPokemons.length / pokemonsPerPage)) ? styles.noShow : styles.nextDots}>...</span>
                    <span id={(currentPage >= Math.ceil(showPokemons.length / pokemonsPerPage)) ? styles.noShow : styles.linktopage} onClick={()=>onPageClick(Math.ceil(showPokemons.length / pokemonsPerPage))}> {Math.ceil(showPokemons.length / pokemonsPerPage)}</span>
                </div>
                <div className={styles.showing}>
                    <span>Showing: {(pokemonsPerPage * currentPage)-pokemonsPerPage+1} - {(pokemonsPerPage * currentPage)} from {showPokemons.length}</span>
                </div>
            </div>
            <div className={styles.cardSection}>
                {(showPokemons.length) ? nowShowing.map(pokemon => {
                    return <Card key={pokemon.id}
                        id={pokemon.id}
                        name={pokemon.name}
                        image={pokemon.image}
                        types={pokemon.Types} />
                    })
                    : <Loading/>
                }
            </div>
            <div className={styles.buttons}>
                <div className={(currentPage > 1) ? styles.backButton : styles.noShow} onClick={previousPage}>{'Back'}</div>
                <div className={(currentPage * pokemonsPerPage < showPokemons.length) ? styles.nextButton : styles.noShow} onClick={nextPage}>{'Next'}</div>
            </div>
        </div>
    )
}

export default Cards;