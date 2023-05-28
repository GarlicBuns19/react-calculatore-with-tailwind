import {createContext, useContext, useReducer} from 'react';
import PropTypes from "prop-types";
import {evaluate} from 'mathjs'

const CalculatorContext = createContext(null);
const CalculatorDispatch = createContext(null);
const initialCalculator = {
    history: [],
    evaluationString: '',
    result: 0
}

export function CalculatorProvider({children}) {
    const [state, dispatch] = useReducer(
        calculatorReducer,
        initialCalculator
    );

    return (
        <CalculatorContext.Provider value={state}>
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

function calculatorReducer(state, action) {
    switch (action.type) {
        case 'input': {
            if (action.btnValue === 'X') action.btnValue = '*';

            return {
                ...state, evaluationString: `${state.evaluationString}${action.btnValue}`
            }
        }
        case 'equal': {
            return {
                ...state, evaluationString: evaluate(`${state.evaluationString}`), result: evaluate(`${state.evaluationString}`)
            }
        }
        default:
            throw Error('Unknown action: ' + action.type)
    }
}

export {initialCalculator, calculatorReducer};