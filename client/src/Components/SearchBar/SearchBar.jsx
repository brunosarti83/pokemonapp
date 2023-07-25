// styles
import styles from './SearchBar.module.css';

const SearchBar = () => {

    return (
        <div className={styles.horizontalBar}>
            <h3>SearchBar</h3>
            <input type='search'></input>
            <div className={styles.searchButton}>Search</div>
        </div>
    )
}

export default SearchBar;