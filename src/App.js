import "./App.css";
import HomePage from "./components/HomePage";
import TopBar from "./components/TopBar";
import { Provider } from "react-redux";
import store from "./Redux/Store/store";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <TopBar />
        <HomePage />
      </Provider>
    </div>
  );
}

export default App;
