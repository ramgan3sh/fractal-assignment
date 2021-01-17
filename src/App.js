import './App.css';
import TodoContainer from "../src/components/TodoContainer";

function App() {
  return (
    <div className="App">
      <header id="app-header">
        <h2>Fractal Assignment</h2>
        <p>TODO App</p>
      </header>
      <TodoContainer />
    </div>
  );
}

export default App;
