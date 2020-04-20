import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Common/Header';
import CharactersContextProvider from './contexts/CharactersContext';
import Main from './components/Main';
import NotFound from './components/NotFound';
import './assets/css/styles.css';

const App = () => (
  <BrowserRouter>
        <Header />
        <Switch>
			<Route exact path='/'>
				<CharactersContextProvider>
					<Main />
				</CharactersContextProvider>
            </Route>
            <Route component={ NotFound } />
        </Switch>
    </BrowserRouter>
);

App.displayName = 'App';

export default App;