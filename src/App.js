import "./App.css";
import Todolist from "./Todolist";
import About from "./About";

function App() {
  return (
    <div className="App">
      <header className="header">Todo List</header>
      <Todolist />
      <About />
    </div>
  );
}

export default App;
