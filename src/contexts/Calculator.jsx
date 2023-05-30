import {createContext, useContext, useReducer} from 'react';
import PropTypes from "prop-types";
import {evaluate} from 'mathjs';

const CalculatorContext = createContext(null);
const CalculatorDispatch = createContext(null);
export const initialCalculator = {
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
};

export function useCalculator() {
    return useContext(CalculatorContext);
}

export function useCalculatorDispatch() {
    return useContext(CalculatorDispatch);
}

export function calculatorReducer(state, action) {
    let str = state.evaluationString;
    let res = state.result;

    switch (action.type) {
        case 'input': {
            if (action.btnValue === 'X') action.btnValue = '*';

            return {
                ...state,
                evaluationString: `${str}${action.btnValue}`
            }
        }
        case 'equal': {
            return {
                ...state,
                evaluationString: `${evaluate(`${str}`)}`,
                result: evaluate(`${str}`)
            }
        }
        case 'backSpace': {
            if (str != '') {
                str = str.slice(0, -1);
            }

            if (str == '') {
                str = '';
                res = 0
            }

            return {
                ...state,
                evaluationString: str,
                result: res
            }
        }
        case 'clear': {
            return {
                ...state,
                evaluationString: '',
                result: 0
            }
        }
        default:
            throw Error('Unknown action: ' + action.type)
    }
}