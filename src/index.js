import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';

import mainReducer from './reducers';

import Images from './components/Images/Images.jsx';

require('./styles/global.scss');

const App = (props) => {
  return (
    <div>
      <h1>App</h1>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/inbox">Inbox</Link></li>
        <li><Link to="/images">Images</Link></li>
      </ul>
      { props.children }
    </div>
  );
};

App.PropTypes = {
  props: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const Inbox = () => <h1>Inbox #1</h1>;

let store = createStore(
  mainReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
        <Route path="inbox" component={Inbox} />
        <Route path="images" component={Images} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root'));
