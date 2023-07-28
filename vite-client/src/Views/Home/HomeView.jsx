// styles
import styles from './HomeView.module.css';
// Components
import SearchBar from '../../Components/SearchBar/SearchBar';
import Filters from '../../Components/Filters/Filters';
import Cards from '../../Components/Cards/Cards';


const HomeView = () => {

    return (
        <div>
            <SearchBar/>
            <Filters/>
            <Cards/>
        </div>
    )
}

export default HomeView;