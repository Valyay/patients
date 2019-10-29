import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import axios from 'axios';
import Present from './components/Present';
import Retired from './components/Retired';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
      presentList: [],
      quittingList: []
    };
  }
  
  componentDidMount(){
    axios.get('http://localhost:3001/present')
    .then( response => {
      this.setState({
        presentList: response.data
    });
  })
  .catch(function (error) {
    console.log(error);
  });

  axios.get('http://localhost:3001/retired')
  .then( response => {
    this.setState({
      quittingList: response.data
  });
})
.catch(function (error) {
  console.log(error);
});
}

	render() {
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
          <Route path="/present">
          <Present presentList={this.state.presentList}/>
          </Route> 
          <Route path="/retired">
          <Retired quittingList={this.state.quittingList}/>
          </Route> 
        </Switch>
      </div>
    </Router>
  );
  }
}

export default App;
