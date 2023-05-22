import {createContext, useContext, useReducer} from 'react';
import PropTypes from "prop-types";

const CalculatorContext = createContext(null);
const CalculatorDispatch = createContext(null);
const initialCalculator = {
    history: [],
    evaluationString: '',
    result: 9
}

export function CalculatorProvider({children}) {
    const [event, action] = useReducer(
        calculatorReducer,
        initialCalculator
    );

    return (
        <CalculatorContext.Provider value={event}>
            <CalculatorDispatch.Provider value={action}>
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

function calculatorReducer(event, action) {
    switch (action.type) {
        default:
            throw Error('Unknown action: ' + action.type)
    }
}

export {initialCalculator, calculatorReducer};