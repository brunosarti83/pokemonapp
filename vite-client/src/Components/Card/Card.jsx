/* eslint-disable react/prop-types */
// styles
import styles from "./Card.module.css";
// hooks and tools
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../helpers/ROUTES";
import { useDispatch } from "react-redux";
// actions
import { setDetailPokemon } from "../../redux/actions";
// components
import TypeTag from "../TypeTag/TypeTag";

const Card = (props) => {
  const { id, name, image, types, pokemon } = props;
  const navigate = useNavigate();
  const userGenerated = !Boolean(Number(id));
  const dispatch = useDispatch();

  const onLink = () => {
    dispatch(setDetailPokemon(pokemon));
    navigate(ROUTES.detail + id);
  };

  return (
    <div className={styles.bigContainer}>
      <div className={styles.margin}></div>
      <div className={styles.otherMargin}></div>
      <div className={styles.Container}>
        <div className={styles.margin}></div>
        <div
          onClick={onLink}
          className={userGenerated ? styles.imageWrapU : styles.imageWrap}
        >
          <img
            src={image}
            alt={`${name}`}
            style={{ viewTransitionName: "name-" + id }}
          />
        </div>
        <div className={styles.Name}>{name}</div>
        <div className={styles.Types}>
          {types.map((type, index) => {
            return <TypeTag key={index} typeName={type.name} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
