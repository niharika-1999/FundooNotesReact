import './App.css';
import Registration from './components/Registration';
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Registration} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;