// Displaying message
import "../index.css";
function Message(props) {
    return (
        <p className="message">
            {props.message}
        </p>
    )
}

export default Message