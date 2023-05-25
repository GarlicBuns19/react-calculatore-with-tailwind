import PropTypes from "prop-types";

const buttonStyles = {
    normal: 'bg-slate-500 hover:bg-slate-600 ease-in duration-300',
    red: 'bg-red-600/80 hover:bg-red-600 ease-in duration-300',
    orange: 'bg-orange-600/80 hover:bg-orange-600 ease-in duration-300',
}

export function Button(props) {
    return (
        <button className={`p-5 rounded-md ${buttonStyles[props.style || 'normal']} ${props.className}`}
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