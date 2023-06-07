import {useCalculator} from "../contexts/Calculator.jsx";

export function CalculatorHistory(props) {
    const cal = useCalculator();

    if (cal.history.length > 0) return (
        <div className={"w-96 max-h-screen overflow-y-auto"}>
            <h2>Calculation History</h2>
            {cal.history.map((item, index) => <div key={index}>{item.cal}</div>)}
        </div>
    );
    else return (
        <div>
            <h2>No Calculation History</h2>
        </div>
    );
}