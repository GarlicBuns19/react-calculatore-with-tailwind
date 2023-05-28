import {CalculatorProvider} from "./contexts/Calculator.jsx";
import {Head} from './components/Head';
import {Button} from './components/Button';

function App() {
    return (
        <>
            <CalculatorProvider>
                <div className="container mx-w-sm bg-slate-800">
                    <div className={"text-zinc-300 font-offSide grid place-content-center w-full h-screen"}>
                        <Head></Head>
                        <div className={"p-3 grid gap-3 grid-cols-4 grid-rows-5 border-2 border-solid rounded-md"}>
                            <Button buttonLabel={'C'} style={"red"}></Button>
                            <Button buttonLabel={'X'} style={"orange"}></Button>
                            <Button buttonLabel={'-'} style={"orange"}></Button>
                            <Button buttonLabel={'%'} style={"orange"}></Button>

                            <Button buttonLabel={'7'}></Button>
                            <Button buttonLabel={'8'}></Button>
                            <Button buttonLabel={'9'}></Button>
                            <Button buttonLabel={'+'} style={"orange"}></Button>
                            <Button buttonLabel={'4'}></Button>
                            <Button buttonLabel={'5'}></Button>
                            <Button buttonLabel={'6'}></Button>
                            <Button buttonLabel={'/'} style={"orange"}></Button>
                            <Button buttonLabel={'1'}></Button>
                            <Button buttonLabel={'2'}></Button>
                            <Button buttonLabel={'3'}></Button>
                            <Button buttonLabel={'='} inputType={'equal'} className={"row-span-2 flex justify-center items-center"} style={"orange"}></Button>
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