import logo from './logo.svg';
import './App.css';
import Component from './components/Component';

var text = "Dette er simen sin app"

function App() {
  return (
    <Component info={text}/>
  );
}

export default App;
