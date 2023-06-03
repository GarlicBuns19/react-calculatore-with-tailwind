import {useCalculator} from "../contexts/Calculator.jsx";

export function CalculatorHistory(props) {
    const cal = useCalculator();

    return (
        <div>
            <h2>History</h2>
            {cal.history.map((item,index) => <div key={index}>{item.cal}</div>)}
        </div>
    );
}