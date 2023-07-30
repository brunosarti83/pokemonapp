// styles
import styles from './DetailView.module.css';
// components
import Detail from '../../Components/Detail/Detail';
// hooks
import { useParams } from 'react-router-dom';
import { useState } from 'react';
// api-requests
import getPokemonDetail from '../../api_requests/getPokemonDetail';


const DetailView = () => {

    const { id } = useParams()
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        getPokemonDetail(id)
        .then(data => {
            setPokemon(data)
        }).catch(error => {
            window.alert(`No Pokemon found with Id: ${id}`)
        }) 
        return setPokemon({})
    },[id])

    return (
        <div>
            <Detail pokemon={pokemon}/>
        </div>
    )
}

export default DetailView;