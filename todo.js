function ToDo(todo) {
    console.log(todo)
    // console.log(index)
    console.log(todo.key)
    function handle() {
        console.log('remove: ',todo.index)
        todo.remove(todo.index)}
    return (
        <div className="todo" key={todo.index} id={todo.index} onClick={handle}>
          {todo.todo.text} (-)
        </div>
    )
}