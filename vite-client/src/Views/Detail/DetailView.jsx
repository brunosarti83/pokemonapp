// styles
import styles from "./DetailView.module.css";
// components
import Detail from "../../Components/Detail/Detail";
import NavBar from "../../Components/NavBar/NavBar";
// hooks
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// api-requests
import getPokemonDetail from "../../api_requests/getPokemonDetail";
// actions
import { setDetailPokemon } from "../../redux/actions";

const DetailView = () => {
  const { id } = useParams();
  const pokemon = useSelector((state) => state.detailPokemon);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!pokemon) {
      getPokemonDetail(id)
        .then((data) => {
          dispatch(setDetailPokemon(data));
        })
        .catch((error) => {
          window.alert(`No Pokemon found with Id: ${id}`);
        });
    }
    //return () => dispatch(setDetailPokemon({}));
  }, [id]);

  return (
    <div>
      <NavBar />
      {pokemon?.id && <Detail pokemon={pokemon} />}
    </div>
  );
};

export default DetailView;
