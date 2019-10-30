import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
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
      rowSelected: -1
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

onRowSelect = row => {
  this.setState({row});
  if (row !== undefined) {
    this.setState({ rowSelected: row  });
  }
}


getNumberYears = date => {
  return Math.abs(new Date(Date.now() - Date.parse(date)).getUTCFullYear() - 1970)
}

	render() {
  return (
    <>
    <Redirect from="/" to="present" component={Present} />
			<div className="app-component">
				<div className="info-component">
					<Info patient={this.state.row} getNumberYears={this.getNumberYears} />
				</div>
				<div className="table-component">
					<nav className="menu">
						<NavLink
							className="menu-item"
							activeClassName="menu-item-active"
							to="/present"
						>
							ПРИСУТСТВУЮТ({this.state.presentList.length})
						</NavLink>
						<NavLink
							className="menu-item"
							activeClassName="menu-item-active"
							to="/retired"
						>
							ВЫБЫВШИЕ({this.state.quittingList.length})
						</NavLink>
					</nav>
					<Switch>
						<Route path="/present">
							<Present
								presentList={this.state.presentList}
								onRowSelect={this.onRowSelect}
                rowSelected={this.state.rowSelected}
							/>
						</Route>
						<Route path="/retired">
							<Retired
								quittingList={this.state.quittingList}
								onRowSelect={this.onRowSelect}
                rowSelected={this.state.rowSelected}
							/>
						</Route>
					</Switch>
				</div>
			</div>
      </>
	);
  }
}

export default App;
