import {createContext, useContext, useEffect, useReducer} from 'react';
import PropTypes from "prop-types";
import {evaluate, max} from 'mathjs';

const CalculatorContext = createContext(null);
const CalculatorDispatch = createContext(null);
export const initialCalculator = {
    history: [],
    evaluationString: '',
    result: 0
}

const numArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const operatorArr = ['+', '-', '*', '/', '.', '%'];

export function CalculatorProvider({children}) {
    const [state, dispatch] = useReducer(
        calculatorReducer,
        initialCalculator
    );


    function handleKeyEvent(e) {
        // console.log(e)
        if (numArr.includes(e.key) || operatorArr.includes(e.key)) {
            dispatch({
                type: 'input',
                btnValue: e.key
            })
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyEvent)
    }, []);

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
    let evalStr = state.evaluationString;
    let res = state.result;

    switch (action.type) {
        case 'input': {
            if (action.btnValue === 'X') action.btnValue = '*';
            if (!numArr.includes(action.btnValue) && evalStr === '') action.btnValue = '';

            return {
                ...state,
                evaluationString: `${evalStr}${action.btnValue}`
            }
        }
        case 'equal': {
            let answer = `${evaluate(`${evalStr}`)}`;
            let addHis = [...state.history, {
                cal: `${evalStr} = ${answer}`
            }]

            if (answer === 'undefined') {
                return {
                    ...state,
                    evaluationString: evalStr,
                    result: '0'
                }
            } else return {
                ...state,
                evaluationString: answer,
                history: addHis,
                result: answer
            }
        }
        case 'backSpace': {
            if (evalStr != '') evalStr = evalStr.slice(0, -1);
            if (evalStr == '') res = 0

            return {
                ...state,
                evaluationString: evalStr,
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