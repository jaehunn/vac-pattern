import { ComponentProps } from "react";

import VTodoItem from "./VTodoItem";

import { useDeleteTodoItem } from "~/queries/todo/useDeleteTodoItem.delete";
import { useUpdateTodoItem } from "~/queries/todo/useUpdateTodoItem.put";
import { TodoValues } from "~/types/Todo";

type Props = {
  item: TodoValues;
};

const TodoItem = ({ item }: Props) => {
  const { mutate: mutateUpdateTodoItem } = useUpdateTodoItem();
  const { mutate: mutateDeleteTodoItem } = useDeleteTodoItem();

  const todoItemProps: ComponentProps<typeof VTodoItem> = {
    item,
    onCheck: () => {
      mutateUpdateTodoItem({
        ...item,
        checked: !item.checked,
      });
    },
    onRemove: () => {
      mutateDeleteTodoItem(item.id);
    },
  };

  return <VTodoItem {...todoItemProps} />;
};

export default TodoItem;
