import TodoInput from "~/components/TodoInput";
import TodoList from "~/components/TodoList";

import { Todo } from "~/queries/todo/useTodoList";

type Props = {
  list?: Todo[];
};

const VTodo = ({ list }: Props) => {
  console.log(list);

  return (
    <div>
      <h1>To Do List</h1>

      <TodoInput />
      <TodoList />
    </div>
  );
};

export default VTodo;
