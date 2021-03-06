import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class extends React.Component {
  render() {
    const { match } = this.props;
    console.log(match);
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to={`${match.url}/about`}>About</Link>
            </li>
            <li>
              <Link to={`${match.url}/topics`}>Topics</Link>
            </li>
          </ul>

          <hr />
          <Route path={`${match.url}/about`} component={About} />
          <Route path={`${match.url}/topics`} component={Topics} />
        </div>
      </Router>
    )
  }
}

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with react</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Component</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={`${match.url}`}
      render={() => <h3>Please select a topic</h3>}
    />
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);