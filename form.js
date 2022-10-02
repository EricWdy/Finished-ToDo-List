function ToDoForm(props) {
  // initialie form state
  const [value, setValue] = React.useState("");
  // console.log("todos:",todos)
  // console.log("setTodos",todos.setTodos)
  // define form input function to update list
  function handleSubmit(e) {
    e.preventDefault();
    if (!value) return;
    props.setTodos([...props.todos, { text: value, isCompleted: false, start: Date.now() }]);
    setValue("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add ToDOs..."
        onChange={(e) => setValue(e.target.value)}
      ></input>
    </form>
  );
}
