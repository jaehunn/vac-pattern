import VTodo from "./VTodo.page";

import { useTodoList } from "~/queries/todo/useTodoList";

const Todo = () => {
  const { data: todoListData } = useTodoList();

  return (
    <>
      <VTodo list={todoListData} />
    </>
  );
};

export default Todo;
