import PropTypes from "prop-types";

export function Button(props) {
    return (
        <button className={"p-5 bg-slate-500 rounded-md hover:bg-slate-600 ease-in duration-300"}
                onClick={props.onClick}>
            {props.buttonLabel}
        </button>
    )
}

Button.propTypes = {
    buttonLabel: PropTypes.string
}

