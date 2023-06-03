import {useCalculator} from "../contexts/Calculator.jsx";

export function Head(props) {
    const cal = useCalculator();
    const operatorArr = ['+', '-', '*', '/', '.', '%'];

    if (operatorArr.includes(cal.evaluationString.at(-2)) && operatorArr.includes(cal.evaluationString.at(-1))) {
        cal.evaluationString = cal.evaluationString.slice(0, -1)
    }

    return (
        <div className={"mb-2 p-2 border-2 border-solid rounded-md"}>
            <div className={"p-5 text-lg text-right bg-zinc-600 rounded-md"}>{cal.evaluationString || cal.result}</div>
        </div>
    )
}