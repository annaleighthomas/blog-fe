import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import BlogPage from '../main/BlogPage';
import Post from '../posts/Post';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <main>

            <Switch>

              <Route path="/" exact={true} render={routerProps => (
                <BlogPage {...routerProps} />
              )} />

              <Route path="/create-post" exact={true} ender={routerProps => (
                <Post {...routerProps} />
              )} />

            </Switch>
          </main>
        </Router>
      </div>
    );
  }

}

export default App;
