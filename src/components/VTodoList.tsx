import TodoItem from "./TodoItem";

import { TodoValues } from "~/types/Todo";

type Props = {
  data?: TodoValues[];
};

const VTodoList = ({ data }: Props) => {
  return (
    <>
      {!data?.length && <div>할 일이 없습니다.</div>}
      {!!data?.length && (
        <ul>
          {data.map((item, index) => {
            return <TodoItem key={index} item={item} />;
          })}
        </ul>
      )}
    </>
  );
};

export default VTodoList;
