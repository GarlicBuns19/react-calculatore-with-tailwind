import PropTypes from "prop-types";

const buttonStyles = {
    normal: 'bg-slate-500 rounded-md hover:bg-slate-600 ease-in duration-300'
}

export function Button(props) {
    return (
        <button className={`p-5 ${buttonStyles[props.style || 'normal']} ${props.className}`}
                onClick={props.onClick}>
            {props.buttonLabel}
        </button>
    )
}

Button.propTypes = {
    buttonLabel: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.string
}