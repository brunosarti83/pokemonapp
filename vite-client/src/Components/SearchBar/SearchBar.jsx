// styles
import styles from './SearchBar.module.css';
// hooks and tools
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// actions
import { getByName } from '../../redux/actions';
// images
import pokeLogo from '../../images/black-pokemon-logo-transparent-27.png';
import pokeBall from '../../images/pokeball-logo.png';

const SearchBar = () => {

    const [name, setName] = useState('')
    const dispatch = useDispatch()

    const handleChange = (event) => {
        setName(event.target.value)
    }

    const onSearch = (name) => {
        dispatch(getByName(name))
    }

    const onClick = (name) => {
        onSearch(name)
        setName('')
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            onClick(name)
        }
    }

    const placeholder = '... search by NAME'

    return (
        <div className={styles.horizontalBar}>
            <input className={styles.inputSearch} id='searchInput' type='search' onChange={handleChange} value={name} placeholder={placeholder} onKeyDown={handleKeyPress} />
            <div className={styles.searchButton} onClick={() => onClick(name)}>Search</div>
            <div className={styles.logoSector}>
                <img className={styles.logo} src={pokeLogo} alt='Pokemon-logo' />
                <img className={styles.pokeball} src={pokeBall} alt='Pokemon-ball' />
            </div>
        </div>
    )
}

export default SearchBar;