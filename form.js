function ToDoForm(todos) {
  // initialie form state
  const [value, setValue] = React.useState("");
  // console.log("todos:",todos)
  // console.log("setTodos",todos.setTodos)
  // define form input function to update list
  function handleSubmit(e) {
    e.preventDefault();
    if (!value) return;
    todos.setTodos([...todos.todos, { text: value, isCompleted: false }]);
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
