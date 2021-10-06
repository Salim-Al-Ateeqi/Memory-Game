import "./App.css";
import CardsArray from "./CardsArray";
import Grid from "./components/Grid";

function App() {
  return (
    <div className="App">
      <Grid card={CardsArray} />
    </div>
  );
}

export default App;
