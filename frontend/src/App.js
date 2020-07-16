import React from 'react';
import logo from './logo.svg';
import './App.css';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Launches } from './components/Launches';
import { Launch } from './components/Launch';

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="">
          <header className="header">
            <img src={logo} className="logo" alt="space-x-logo" />
          </header>
          <main className="main">
            <Switch>
              <Route exact path="/" component={Launches} ></Route>
              <Route exact path="/launch/:flight_number" component={Launch} ></Route>
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
