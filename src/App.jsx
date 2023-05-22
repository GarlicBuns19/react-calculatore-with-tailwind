import {Button} from './components/Button';
import {CalculatorProvider, useCalculator} from "./contexts/Calculator.jsx";

function App() {
    const calculator = useCalculator();
    console.log(calculator)

    return (
        <>
            <div className="container mx-w-sm bg-slate-800">
                <div className={"text-zinc-300 font-offSide grid place-content-center w-full h-screen"}>
                    <div className={"mb-2 p-2 border-2 border-solid rounded-md"}>
                        <div className={"p-5 text-lg text-right bg-zinc-600 rounded-md"}></div>
                    </div>
                    <CalculatorProvider>
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
                            <div
                                className={"row-span-2 p-5 flex justify-center items-center bg-sky-900 rounded-md hover:bg-sky-700 ease-in duration-300"}>+
                            </div>
                            <Button buttonLabel={'4'}></Button>
                            <Button buttonLabel={'5'}></Button>
                            <Button buttonLabel={'6'}></Button>
                            <Button buttonLabel={'1'}></Button>
                            <Button buttonLabel={'2'}></Button>
                            <Button buttonLabel={'3'}></Button>
                            <div
                                className={"row-span-2 p-5 flex justify-center items-center bg-indigo-900 rounded-md hover:bg-indigo-700 ease-in duration-300"}>=
                            </div>
                            <div
                                className={"col-span-2 p-5 bg-pink-900 rounded-md hover:bg-pink-700 ease-in duration-300"}>0
                            </div>
                            <Button buttonLabel={'.'}></Button>
                        </div>
                    </CalculatorProvider>
                </div>
            </div>
        </>
    )
}

export default App
