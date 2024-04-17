import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllTodos } from "../services/actions/todosActions";


const Todos = () => {

    const {isLoading, todos, error} = useSelector(state => state);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllTodos())
    },[])
    
    console.log(todos)
  return (
    <div>
        {isLoading ? <h1>Loading data ...</h1> : <div>
            {todos.map((todo) => <h1 key={todo.id}>{todo.title}</h1>)}
        </div>}
    </div>
  )
}

export default Todos