import { TodoValues } from "~/types/Todo";

type Props = {
  item: TodoValues;
  onCheck: React.ChangeEventHandler<HTMLInputElement>;
  onRemove: React.MouseEventHandler<HTMLButtonElement>;
};

const VTodoItem = ({ item, onCheck, onRemove }: Props) => {
  return (
    <li>
      <input
        id={`${item.id}`}
        type="checkbox"
        onChange={onCheck}
        checked={item.checked}
      />
      <label htmlFor={`${item.id}`}>
        <span>{item.value}</span>
      </label>
      <button onClick={onRemove}>Remove</button>
    </li>
  );
};

export default VTodoItem;
