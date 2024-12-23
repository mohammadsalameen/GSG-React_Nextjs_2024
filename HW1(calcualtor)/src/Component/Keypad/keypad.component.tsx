import './keypad.css'
import Button from '../Button/button.component';

interface IProps{
    onButtonClick : (value : string)=> void;
}
const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "AC"
  ];
const Keypad : React.FC<IProps> = ({onButtonClick}) =>{
    return (
        <div className='keypad'>
            {buttons.map((element, index) => (
                <Button key={element + index} value={element} onClick = {onButtonClick}/>
            ))}
        </div>
    )
}
export default Keypad;