import { AddNewTodo } from "./component/AddNewTodo"
import { Calendar } from "./component/Calendar"
import { EditTodo } from "./component/EditTodo"
import { Main } from "./component/Main"
import { Projects } from "./component/Projects"
import { Sidebar } from "./component/Sidebar"
import { TodoList } from "./component/TodoList"
import { User } from "./component/User"
import { TodoContextProvider } from "./context/TodoContext"
import './styles/todo.css'


export const Home = () => {
    return (
        <TodoContextProvider>
            <div className='pd-todo-wrapper'>

                <Sidebar>
                    <User />
                    <AddNewTodo />
                    <Calendar />
                    <Projects />
                </Sidebar>

                <Main>
                    <TodoList />
                    <EditTodo />
                </Main>
            </div>
        </TodoContextProvider>
    )
}
