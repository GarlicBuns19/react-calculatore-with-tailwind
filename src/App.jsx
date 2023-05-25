import {Button} from './components/Button';
import {Head} from './components/Head';
import {CalculatorProvider, useCalculator, initialCalculator} from "./contexts/Calculator.jsx";
import {useReducer} from "react";

function App() {
    // const [state, dispatch] = useReducer(useCalculator, initialCalculator);
    return (
        <>
            <CalculatorProvider>
                <div className="container mx-w-sm bg-slate-800">
                    <div className={"text-zinc-300 font-offSide grid place-content-center w-full h-screen"}>
                        <Head></Head>
                        <div className={"p-3 grid gap-3 grid-cols-4 grid-rows-5 border-2 border-solid rounded-md"}>
                            {/*Math Functionality Buttons*/}
                            <Button buttonLabel={'/'}></Button>
                            <Button buttonLabel={'X'}></Button>
                            <Button buttonLabel={'-'}></Button>
                            <Button buttonLabel={'%'}></Button>

                            {/*Number Buttons*/}
                            <Button buttonLabel={'7'}></Button>
                            <Button buttonLabel={'8'}></Button>
                            <Button buttonLabel={'9'}></Button>
                            <Button buttonLabel={'+'}
                                    className={"row-span-2 flex justify-center items-center"}></Button>
                            <Button buttonLabel={'4'}></Button>
                            <Button buttonLabel={'5'}></Button>
                            <Button buttonLabel={'6'}></Button>
                            <Button buttonLabel={'1'}></Button>
                            <Button buttonLabel={'2'}></Button>
                            <Button buttonLabel={'3'}></Button>
                            <Button buttonLabel={'='}
                                    className={"row-span-2 flex justify-center items-center"}></Button>
                            <Button buttonLabel={'0'} className={"col-span-2 text-left"}></Button>
                            <Button buttonLabel={'.'}></Button>
                        </div>
                    </div>
                </div>
            </CalculatorProvider>
        </>
    )
}

export default App