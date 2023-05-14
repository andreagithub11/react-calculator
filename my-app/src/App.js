import './App.css';
import Keyboard from "./components/KeyBoard";
import Screen from "./components/Screen";
import ResultProvider from "./context/ResultContext";

function App() {

  return (

    <div className="container row justify-content-center mt-5 call-md-6 card">
      <h1 className="card-header text-center">React Calculator</h1>
      <div className="card-body">
        <ResultProvider>
          <Screen/>
          <Keyboard/>
        </ResultProvider>
      </div>
    </div>
  );

}

export default App;
