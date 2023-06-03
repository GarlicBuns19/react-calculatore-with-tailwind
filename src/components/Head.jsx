import {useCalculator} from "../contexts/Calculator.jsx";

export function Head(props) {
    const cal = useCalculator();

    return (
        <div className={"mb-2 p-2 border-2 border-solid rounded-md"}>
            <div className={"p-5 text-lg text-right bg-zinc-600 rounded-md"}>{cal.evaluationString || cal.result}</div>
        </div>
        )
}