
import './App.css';
import {ShopConnector} from './shop/ShopConnector'
import {sportsStoreDataStore} from './data/DataStore'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import {Provider} from 'react-redux'



function App() {
  return (
    <Provider store={sportsStoreDataStore}>
      <Router>
      <Switch>
        <Route  path='/shop' component={ShopConnector} />
        <Redirect to='/shop' />
      </Switch>
      </Router>
    </Provider>
  );
}

export default App;
