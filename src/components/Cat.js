

const Cat = () => {

    return (
        <article className="product">
            <div className="card">
                <div className="card__content">
                    <p className="card__description">Сказочное заморское яство</p>
                    <h2 className="card__heading">Нямушка</h2>
                    <p className="card__info">с фуа-гра</p>
                    <p className="card__bonus">10 порций<br />мышь в подарок</p>
                    <div className="card__weight">
                        <p className="card__weight-text">0,5</p>
                        <p className="card__weight-text card__weight-text--small">кг</p>
                    </div>
                </div>
            </div>
            <p className="footer">Чего сидишь? Порадуй котэ,<button > <span className="footer__btn">купи</span></button></p>
        </article>

    )
}

export default Cat;