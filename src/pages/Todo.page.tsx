import TodoInput from "~/components/TodoInput";
import TodoList from "~/components/TodoList";

const Todo = () => {
  return (
    <>
      <div>
        <h1>To Do List</h1>

        <TodoInput />
        <TodoList />
      </div>
    </>
  );
};

export default Todo;
