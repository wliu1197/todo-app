import { useParams } from 'react-router-dom';
export default function ListTodo({username}){
    const today = new Date();
    const targetDate = new Date(today.getFullYear()+2,today.getMonth()+1, today.getDay());
    // hard coded user todos will get from reset api later
    const userTodos = [{
            username : "wen",
            todos: [{id : 1, description: "learn aws", done: false, target: targetDate}, {id : 2, description : "learn react", done: false, target: targetDate}]
        },
        {
            username : "anna",
            todos: [{id : 1, description: "eat", done: false, target: targetDate}, {id : 2, description : "sleep", done: false, target: targetDate}]
        }];

    const urlParams = useParams();
    
    return(
        <div className='container-fluid'>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <table className='table'>
                        <thead>
                            <tr>
                                <td>Id</td>
                                <td>Description</td>
                                <td>Done</td>
                                <td>Target date</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userTodos.map(
                                    userTodo => {
                                        if(username === userTodo.username || urlParams.username === userTodo.username) {
                                            return (
                                                userTodo.todos.map(
                                                    todo => (
                                                        <tr key={todo.id}>
                                                            <td>{todo.id}</td>
                                                            <td>{todo.description}</td>
                                                            <td>{todo.done.toString()}</td>
                                                            <td>{todo.target.toDateString()}</td>
                                                        </tr>
                                                    )
                                                )
                                            )
                                        }else{
                                            return(<></>)
                                        }
                                    }
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
    )
}