import './styles/style.css';
import Advice from './components/Advice';
import iconDice from "./images/icon-dice.svg";

function App() {

  const generateRandomAdvice = () => {
    setCounter(prevCount => prevCount + 1);
  }

  return (
    <>
    <div id="adviceGenerator">
      <Advice />
      <div id="patternDivider"></div>
      <button id="generateAdviceBtn" onClick={generateRandomAdvice}>
          <img src={iconDice} alt="Generate advice" />
      </button>
    </div>
    </>
  )
}

export default App;
