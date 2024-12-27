import TodoItem from '../todoItem/TodoItem.component';
import './AllToDos.css'
import { ItodoItem } from '../types';

interface IProps{
    items : ItodoItem[];
    onToggle : (e : React.ChangeEvent<HTMLInputElement>) => void;
    onDelete : (index : number) => void;

}
const AllToDos = (props : IProps) =>{

    return (
        <div className='list-wrapper'>
            {
                props.items.map((item, index) => <TodoItem key={item.id} data = {item} onToggle={props.onToggle} onDelete= {() =>props.onDelete(index)}/>)
            }
        </div>
    )
}
export default AllToDos;