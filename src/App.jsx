import {CalculatorProvider} from "./contexts/Calculator.jsx";
import {Head} from './components/Head';
import {Button} from './components/Button';
import {CalculatorHistory} from './components/CalculatorHistory';
import {createPortal} from 'react-dom';
import {useEffect} from "react";

const calculatorHistory = document.getElementById('calculatorHistory');

function App() {
    useEffect(() => {
        document.addEventListener('keydown', (e) => console.log(e.key))
    }, []);

    return (
        <div className="bg-slate-800">
            <CalculatorProvider>
                <div className={"text-zinc-300 font-offSide grid place-content-center w-full h-screen"}>
                    <Head></Head>
                    <div className={"p-3 grid gap-3 grid-cols-4 grid-rows-5 border-2 border-solid rounded-md"}>
                        <Button buttonLabel={'C'} inputType={'clear'} style={"red"}></Button>
                        <Button buttonLabel={'X'} style={"orange"}></Button>
                        <Button buttonLabel={'-'} style={"orange"}></Button>
                        <Button buttonLabel={'back'} inputType={'backSpace'} style={"orange"}></Button>

                        <Button buttonLabel={'7'}></Button>
                        <Button buttonLabel={'8'}></Button>
                        <Button buttonLabel={'9'}></Button>
                        <Button buttonLabel={'%'} style={"orange"}></Button>
                        <Button buttonLabel={'4'}></Button>
                        <Button buttonLabel={'5'}></Button>
                        <Button buttonLabel={'6'}></Button>
                        <Button buttonLabel={'+'} style={"orange"}></Button>
                        <Button buttonLabel={'1'}></Button>
                        <Button buttonLabel={'2'}></Button>
                        <Button buttonLabel={'3'}></Button>
                        <Button buttonLabel={'/'} style={"orange"}></Button>
                        <Button buttonLabel={'0'} className={"col-span-2 text-left"}></Button>
                        <Button buttonLabel={'.'}></Button>
                        <Button buttonLabel={'='} inputType={'equal'} className={"flex justify-center items-center"}
                                style={"orange"}></Button>
                    </div>

                    {createPortal(
                        <CalculatorHistory/>,
                        calculatorHistory
                    )}
                </div>
            </CalculatorProvider>
        </div>
    )
}

export default App