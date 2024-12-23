import './button.css'

interface IProps{
    value : string;
    onClick : (value : string) => void;
}
const Button : React.FC <IProps> = ({value , onClick})=>{
    
    return(
        <button onClick={() => onClick(value)}>{value}</button>
    )
}
export default Button;