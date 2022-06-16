

const Weight = ({ info, backGroundStyle }) => {
    //получаем информацию из пропсов
    const { weight, units } = info;
    return (
        <div className={`card__weight ${backGroundStyle} `}>
            <p className="card__weight-text">{weight}</p>
            <p className="card__weight-text card__weight-text--small">
                {units}
            </p>
        </div>
    )
}

export default Weight;