import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';
import _ from "lodash";
import Present from './components/Present';
import Retired from './components/Retired';
import Info from './components/Info';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
      presentList: [],
      quittingList: [],
      row: null,
    };
  }
  
  componentDidMount(){
    axios.get('http://localhost:3001/present')
    .then( response => {
      this.setState({ 
        presentList: _.orderBy(response.data, ['historyNumber'], ['asc'])
    });
  })
  .catch(function (error) {
    console.log(error);
  });

  axios.get('http://localhost:3001/retired')
  .then( response => {
    this.setState({
      quittingList: _.orderBy(response.data, ['historyNumber'], ['asc'])
  });
})
.catch(function (error) {
  console.log(error);
});
}

onRowSelect = row => (
  this.setState({row})
)

getNumberYears = date => {
  return Math.abs(new Date(Date.now() - Date.parse(date)).getUTCFullYear() - 1970)
}

	render() {
  return (
    <Router>
      <div className = "app-component">
        <Info patient={this.state.row} getNumberYears={this.getNumberYears} />
      <div className = "table-component">
 <nav>
 <ul className="menu">
          <li className="menu-item">
            <Link activeClassName="menu-item-a" to="/present">ПРИСУТСТВУЮТ({this.state.presentList.length})</Link>
          </li>
          <li className="menu-item">
            <Link activeClassName="menu-item-a" to="/retired">ВЫБЫВШИЕ({this.state.quittingList.length})</Link>
          </li>
        </ul>
 </nav>
<Switch>
          <Route path="/present">
          <Present presentList={this.state.presentList} onRowSelect={this.onRowSelect}/>
          </Route> 
          <Route path="/retired">
          <Retired quittingList={this.state.quittingList} onRowSelect={this.onRowSelect}/>
          </Route> 
        </Switch>
</div>
      </div>
    </Router>
  );
  }
}

export default App;
