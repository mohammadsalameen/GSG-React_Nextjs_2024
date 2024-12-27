import { ItodoItem } from "../types";
import "./form.css";

interface IProps{
    onSubmit : (item : ItodoItem) => void;
}
const Form = (props : IProps) => {
    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const title = e.currentTarget["task"].value;
        const isUrgent  = e.currentTarget["urgent"].checked;
        if(title.length > 3){
        const newTask : ItodoItem = {
            id : Date.now(),
            title,
            isUrgent,
            isDone : false
        }
        props.onSubmit(newTask);
    }
    }
  return (
    <form className="form-wrapper" onSubmit={handleSubmit}>
      <div className="input-urgent">
      <input className="input" type="text" name="task" required placeholder="Type Todo here..."  />
        <label htmlFor="urgent">Urgent</label>
        <input type="checkbox" id="urgent" />
      </div>
        <input className="addTodo" type="submit" value="Add Task" />
    </form>
  );
};
export default Form;
