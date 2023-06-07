import {useCalculator} from "../contexts/Calculator.jsx";

export function Head(props) {
    const cal = useCalculator();
    const operatorArr = ['+', '-', '*', '/', '.', '%'];
    var evalStr = cal.evaluationString;
    var evalStrSecondLastChar = evalStr.at(-2);

    if (operatorArr.includes(evalStrSecondLastChar) && operatorArr.includes(evalStr.at(-1))) {
        cal.evaluationString = evalStr.replace(evalStrSecondLastChar ,'')
    }

    return (
        <div className={"mb-2 p-2 border-2 border-solid rounded-md"}>
            <div className={"p-5 text-lg text-right bg-zinc-600 rounded-md w-96 overflow-x-auto"}>{evalStr || cal.result}</div>
        </div>
    )
}