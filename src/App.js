import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from './components/Alert';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useState} from 'react'
import Radium, { StyleRoot } from "radium";

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }
  const toggleMode = ()=>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enabled", "success");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "success");
  }
}
  return (
    <>
      <StyleRoot>
        <Router>
          <Navbar title="TextApp" mode={mode} toggleMode={toggleMode}/>
          <Alert alert={alert}/>
          <Switch>
            <Route exact path="/">
              <TextForm heading="Enter the text below" />
            </Route>
          </Switch>
        </Router>
      </StyleRoot>
    </>
  );
}

export default Radium(App);
