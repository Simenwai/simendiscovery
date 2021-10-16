import logo from './logo.svg';
import './App.css';
import Component from './components/Component';

var text = "Simen Waitz sin søknad til Discovery programmet"

function App() {
  return (
    <Component info={text}/>
  );
}

export default App;
