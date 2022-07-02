import Bonus from "./bonus/Bonus";
import uniqid from "uniqid";
import Footer from "./footer/Footer";
import Weight from "./weight/Weight";
import { useDispatch } from "react-redux";
import { selectItem } from "../store/actions";
import { useState } from "react";

const Cat = ({ info }) => {
    //инициализируем диспетчер
    const dispatch = useDispatch();
    const [howerText, setHowerText] = useState(true)
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
    //обработчик клика на область
    const onSelect = id => dispatch(selectItem(id));
    const onHowerChange = () => {
        if (isSelected) setHowerText(false);
    }
    //определяем стиль контента
    const backGroundStyle = isDisabled
        ? "cover"
        : isSelected
            ? "selected"
            : null

    return (
        <article className="product" >
            <div className={`card ${backGroundStyle} `} onClick={() => onSelect(id)} onMouseEnter={onHowerChange} onMouseLeave={() => setHowerText(true)}>
                <div className={`card__content ${backGroundStyle} `}>
                    <img className={`card__img ${backGroundStyle} `} src={`${photo.img}`} srcSet={`${photo.img2x} 2x, ${photo.img3x} 3x `} alt={`${photo.img}`} loading="lazy" />
                    <p className={`card__description ${backGroundStyle} ${howerText ? null : isSelected ? "card__description--hover" : null} `}>{howerText ? description[0] : isSelected ? description[1] : description[0]}</p>
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