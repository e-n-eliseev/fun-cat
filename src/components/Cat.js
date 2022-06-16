import Bonus from "./bonus/Bonus";
import uniqid from "uniqid";
import Footer from "./footer/Footer";
import Weight from "./weight/Weight";
import { useDispatch } from "react-redux";
import { selectItem } from "../store/actions";

const Cat = ({ info }) => {
    //инициализируем диспетчер
    const dispatch = useDispatch();
    //извлекаем данные из пропсов
    const {
        id,
        description,
        heading,
        nutrients,
        additional,
        units,
        photo,
        weight,
        isSelected,
        isDisabled } = info;

    const onSelect = id => dispatch(selectItem(id));
    //определяем стиль контента
    const backGroundStyle = isDisabled
        ? "cover"
        : isSelected
            ? "selected"
            : null


    return (
        <article className="product" >
            <div className={`card ${backGroundStyle} `} onClick={() => onSelect(id)}>
                <div className={`card__content ${backGroundStyle} `}>
                    <img className={`card__img ${backGroundStyle} `} src={`${photo.img}`} alt={`${photo.img}`} />
                    <p className={`card__description ${backGroundStyle} `}>{description}</p>
                    <h2 className={`card__heading  ${backGroundStyle} `}>{heading}</h2>
                    <p className={`card__info ${backGroundStyle} `}>{nutrients}</p>
                    <ul className={`card__bonus ${backGroundStyle} `}>
                        {units.map(item => <Bonus key={uniqid()} unit={item} />)}
                    </ul>
                    <Weight info={weight} backGroundStyle={backGroundStyle} />
                </div>
            </div>
            <Footer info={{ additional, isSelected, isDisabled, id }} select={onSelect} />
        </article>

    )
}

export default Cat;