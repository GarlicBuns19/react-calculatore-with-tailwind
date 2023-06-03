import {useCalculator} from "../contexts/Calculator.jsx";

export function CalculatorHistory(props) {
    const cal = useCalculator();

    return (
        <div>
            <h2>History</h2>
            {cal.history.map((e) => <div key={e.id}>{e.cal}</div>)}
        </div>
    );
}