import './App.css';
import Registration from './components/Registration';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
          <Route path="/" exact component={Registration} />
          <Route path="/login" exact component={Login} />
          <Route path="/forgot" exact component={ForgotPassword} />
          <Route path="/reset/:token" exact component={ResetPassword} />
      </Router>
    </div>
  );
}
export default App;