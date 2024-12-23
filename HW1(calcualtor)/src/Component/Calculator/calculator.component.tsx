import { useState } from 'react';
import Keypad from '../Keypad/keypad.component';
import './calculator.css'

const Calculator = () =>{
    const [input, setInput] = useState<string>("");
    const [result, setResult] = useState<string>("");
    const handleButtonClick = (value : string) =>{
        if(value === "="){
            try{
                setResult(eval(input).toString());
            }
            catch{
                setResult("Error");
            }
        }
            else if(value === "AC"){
                setResult("");
                setInput("");
            }
            else{
                setInput((prev) => prev + value);
            }
        }
    return (
        <div className='std-wrapper'>
            <h1>React Calculator</h1>
            <div className='Result'>
                <div className='input-btn'>
                {input}
                </div>
                <div className='result-btn'>
                {result}
                </div>
            </div>
        <Keypad onButtonClick={handleButtonClick} />
        </div>
    )
}
export default Calculator;