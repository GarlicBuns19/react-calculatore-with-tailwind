import {NumberButton, FunctionalityButton} from './components/Button';

function App() {
    return (
        <>
            <div className="container mx-w-sm bg-slate-800">
                <div className={"text-zinc-300 font-offSide grid place-content-center w-full h-screen"}>
                    <div className={"mb-2 p-2 border-2 border-solid rounded-md"}>
                        <div className={"p-5 text-lg text-left bg-zinc-600 rounded-md"}>0</div>
                    </div>
                    <div className={"p-3 grid gap-3 grid-cols-4 grid-rows-4 border-2 border-solid rounded-md"}>
                        {/*Math Functionality Buttons*/}
                        <FunctionalityButton>/</FunctionalityButton>
                        <FunctionalityButton>*</FunctionalityButton>
                        <FunctionalityButton>-</FunctionalityButton>
                        <FunctionalityButton>C</FunctionalityButton>

                        {/*Number Buttons*/}
                        <NumberButton>7</NumberButton>
                        <NumberButton>8</NumberButton>
                        <NumberButton>9</NumberButton>
                        <div className={"row-span-2 p-5 bg-sky-900 rounded-md hover:bg-sky-700 ease-in duration-300"}>+</div>
                        <NumberButton>4</NumberButton>
                        <NumberButton>5</NumberButton>
                        <NumberButton>6</NumberButton>
                        <NumberButton>1</NumberButton>
                        <NumberButton>2</NumberButton>
                        <NumberButton>3</NumberButton>
                        <div className={"row-span-1 p-5 bg-indigo-900 rounded-md hover:bg-indigo-700 ease-in duration-300"}>=</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
