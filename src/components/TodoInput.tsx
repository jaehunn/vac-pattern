import { ComponentProps, useState } from "react";

import VTodoInput from "./VTodoInput";

import { useCreateTodoItem } from "~/queries/todo/useCreateTodoItem.post";

const TodoInput = () => {
  const [value, setValue] = useState("");

  const { mutate: mutateCreateTodoItem } = useCreateTodoItem();

  const todoInputProps: ComponentProps<typeof VTodoInput> = {
    value,
    onChange: ({ target: { value } }) => setValue(value),
    onSubmit: (e) => {
      e.preventDefault();

      mutateCreateTodoItem({ value });
      setValue("");
    },
  };

  return (
    <>
      <VTodoInput {...todoInputProps} />
    </>
  );
};

export default TodoInput;
