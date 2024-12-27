import { ItodoItem } from '../types'
import './TodoItem.css'
import {Trash} from '@phosphor-icons/react'

interface IProps{
    data : ItodoItem;
    onToggle : (e : React.ChangeEvent<HTMLInputElement>) => void;
    onDelete : () => void;
}
const TodoItem = ({data, onToggle, onDelete} : IProps) => {

    return (
        <div className='item-wrapper'>
                <input className='check' type="checkbox" checked = {data.isDone} onChange={onToggle} data-item-id = {data.id}/>
                <span>{data.title}</span>
                <span>isUrgent : {data.isUrgent ? "Yes" : "No"}</span>
                <span className='trash'><Trash size={24} color="#e70d0d" weight="fill" onClick={onDelete}/></span>
            
        </div>
    )
}
export default TodoItem;