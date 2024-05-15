import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/counter/Counter";
import Posts from "./components/posts/PostsWithThunk";

function App() {
  return (
    <div className="App">
      <Counter />
      <Posts />
    </div>
  );
}

export default App;
