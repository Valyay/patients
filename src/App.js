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

    };
  }
  
//   componentDidMount(){
//     axios.get('../jsonData/presentList.json')
//     .then( response => {
//       this.setState({
//         presentList: response.data
//     });
//     console.log(this.state);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

//   axios.get('../jsonData/quittingList.json')
//   .then( response => {
//     this.setState({
//       quittingList: response.data
//   });
//   console.log(this.state);
// })
// .catch(function (error) {
//   console.log(error);
// });
//   }

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
          <Redirect from="/" to="/present" component={Present}/>
          <Route path="/retired" component={Retired}/>
        </Switch>
      </div>
    </Router>
  );
  }
}

export default App;
