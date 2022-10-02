function ToDo(props) {
  const [min, setMin] = React.useState(0);
  const [running, setRunning] = React.useState(true);
  const [lastStart, setLastStart] = React.useState(Date.now());
  const TimeSpent = () => {
    if (running && min === 0) {
      return (<>Started</>);
    } 
    if (running && lastStart !== props.todo.start) {
        return (<>Resumed. Time already spent: {Math.floor(min)} mins</>)
    }
    if (!running) return (<>Stopped. Time spent: {Math.floor(min)} mins</>);
    };

  function handle(e) {
    // console.log('remove: ',todo.index)
    // todo.remove(todo.index)}
    // 当running为false时，点击todo需启动计时，反之则暂停
    if (!running) {
      setRunning(true);
      setLastStart(Date.now());
      e.target.style.background = "green";
      console.log(`timer resumes at ${lastStart}, accumulated time since start: ${min}`)
    } else {
      setRunning(false);
      const finish = Date.now();
      const milisec = finish - lastStart;
      const minutes = Number(((milisec / 1000) / 60).toFixed(2));
      console.log(`time difference in minutes ${minutes}`);
      setMin(minutes+min);
      e.target.style.background = "orange";
      console.log(`timer stops at ${finish}`)
    }
  }
  return (
    <div className="todo" key={props.index} id={props.index} onClick={handle}>
      {props.todo.text} <TimeSpent></TimeSpent>
    </div>
  );
}
