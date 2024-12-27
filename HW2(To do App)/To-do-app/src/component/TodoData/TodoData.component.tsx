import { ItodoItem } from '../types';
import './TodoData.css'

interface IProps{
    items : ItodoItem[];
}
const TodoData = (props : IProps) =>{
    const urgentCount = props.items.filter(item => item.isUrgent).length;
    const completedCount = props.items.filter(item => item.isDone).length;

    return (
        <div className='dashboard-wrapper'>
            
                <div className="created-task">
                    <b>{props.items.length}</b>
                    <span>Created tasks</span>
                </div>
                <div className="urgent-task">
                    <b>{urgentCount}</b>
                    <span>Urgent tasks</span>
                </div>
                <div className="completed-task">
                    <b>{completedCount}</b>
                    <span>Completed tasks</span>
                </div>
        </div>
    )
}
export default TodoData;