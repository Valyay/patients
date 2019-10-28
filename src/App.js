import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Present from './components/Present';
import Retired from './components/Retired';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
  console.log(this.props);
  return (
    <Router>
      <div>

        <ul>
          <li>
            <Link to="/present">Present</Link>
          </li>
          <li>
            <Link to="/retired">Retired</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Redirect from="/" to="/present" component={Present}/>
          <Route path="/retired" component={Retired}/>
        </Switch>
      </div>
    </Router>
  );
  }
}

export default App;
