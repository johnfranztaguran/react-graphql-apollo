import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import space from './space.jpg';
import Launches from './components/launches';
import Launch from './components/launch';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client} >
        <Router>
          <div className="container">
            <img src={space} alt="SpaceX" style={{ width: 300, display: 'block', margin: 'auto' }} />
            <Route exact path="/" component={Launches} />
            <Route exact path="/launch/:flight_number" component={Launch} />
          </div>

        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
