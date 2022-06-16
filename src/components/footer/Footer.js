

const Footer = ({ info, select }) => {
    //получаем информацию из пропсов
    const { additional, isSelected, isDisabled, id } = info;
    return (
        <>
            {/*производим условную отрисовку*/}
            {!isDisabled
                ? !isSelected
                    ? <p className="footer footer--default">Чего сидишь? Порадуй котэ,
                        <button onClick={() => select(id)} >
                            <span className="footer__btn">купи</span>
                        </button></p>
                    : <p className="footer footer--selected">{additional}</p>
                : <p className="footer footer--disabled">Печалька, с курой закончился.</p>
            }
        </>
    )
}

export default Footer;