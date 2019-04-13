import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter, Route } from "react-router-dom";
import MainReducer from './reducers/MainReducer';
import App from './App';
import Todo from './components/Todo';
import registerServiceWorker from './registerServiceWorker';

const customMiddleWare = store => next => action => {
    console.log("Middleware triggered:", action);
    next(action);
}
  
const store = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)(MainReducer, applyMiddleware(customMiddleWare))

ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
        {/* <App /> */}
        <React.Fragment>
            <Route exact path="/" component={App} />
            <Route path="/:id" component={Todo} />
        </React.Fragment>
    </BrowserRouter>
</Provider>
, document.getElementById('root'));
registerServiceWorker();
