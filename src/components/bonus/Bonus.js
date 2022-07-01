
const Bonus = ({ unit }) => {

    return (
        <li>
            <span className="card__units">{unit.quantity}</span> {unit.dimensions}
        </li>
    )
}

export default Bonus;