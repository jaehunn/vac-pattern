type Props = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
};

const VTodoInput = ({ value, onChange, onSubmit }: Props) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>
          <input type="text" name="todo" value={value} onChange={onChange} />
        </label>
        <button type="submit">Register</button>
      </div>
    </form>
  );
};

export default VTodoInput;
