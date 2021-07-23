




const CheckBox = ({ title, pressed }) => {
    return (
        <span className="me-3">
            <input type="checkbox"
                   onChange={() => pressed = !pressed }
            />
            <small> { title }</small>
        </span>
    )
}


export default CheckBox