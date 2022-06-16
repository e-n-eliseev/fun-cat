
const Bonus = ({ unit }) => {

    return (
        <li>
            <strong>{unit.quantity}</strong> {unit.dimensions}
        </li>
    )
}

export default Bonus;