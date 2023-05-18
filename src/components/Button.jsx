export function NumberButton(props) {
    return (
        <button className={"p-5 bg-slate-500 rounded-md hover:bg-slate-600 ease-in duration-300"}
                onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export function FunctionalityButton(props) {
    return (
        <button className={"p-5 bg-green-900 rounded-md hover:bg-green-700 ease-in duration-300"}
                onClick={props.onClick}>
            {props.children}
        </button>
    )
}