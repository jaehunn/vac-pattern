import { ComponentProps, useCallback } from "react";

import VTodoList from "./VTodoList";

import { useTodoList } from "~/queries/todo/useTodoList.get";
import { TodoValues } from "~/types/Todo";

const TodoList = () => {
  const { data } = useTodoList();

  const todoListProps: ComponentProps<typeof VTodoList> = {
    data,
  };

  return (
    <>
      <VTodoList {...todoListProps} />
    </>
  );
};

export default TodoList;
