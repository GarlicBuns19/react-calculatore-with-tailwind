import {createContext, useContext, useReducer} from 'react';
import PropTypes from "prop-types";
import {evaluate} from 'mathjs'

const CalculatorContext = createContext(null);
const CalculatorDispatch = createContext(null);
const initialCalculator = {
    history: [],
    evaluationString: '',
    result: 9
}

export function CalculatorProvider({children}) {
    const [tasks, dispatch] = useReducer(
        calculatorReducer,
        initialCalculator
    );

    return (
        <CalculatorContext.Provider value={tasks}>
            <CalculatorDispatch.Provider value={dispatch}>
                {children}
            </CalculatorDispatch.Provider>
        </CalculatorContext.Provider>
    );
}

CalculatorProvider.propTypes = {
    children: PropTypes.element
}

export function useCalculator() {
    return useContext(CalculatorContext);
}

export function useCalculatorDispatch() {
    return useContext(CalculatorDispatch);
}

function calculatorReducer(tasks, action) {
    console.log(tasks)
    switch (action.type) {
        case 'input': {
            return tasks;
        }
        case 'equal': {
            return initialCalculator.result = initialCalculator.evaluationString
        }
        default:
            throw Error('Unknown action: ' + action.type)
    }
}

export {initialCalculator, calculatorReducer};