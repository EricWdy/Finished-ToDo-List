function App() {
  // initialize list state
  const [todos, setTodos] = React.useState([
    
  ]);
  // console.log('the original todos',todos)
  // define list deletion function
  function removeTodo(index) {
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos([...temp]);
  }
  
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, i) => (
          <ToDo todo={todo} index={i} key={i} remove={removeTodo}/>
        ))}
        <ToDoForm todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
