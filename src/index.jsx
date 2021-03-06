"use strict";

var React = require('react'),
    ReactDOM = require('react-dom'),
    createStore = require('redux').createStore,
    applyMiddleware = require('redux').applyMiddleware,
    compose = require('redux').compose,
    promiseMiddleware = require('redux-promise'),
    Provider = require('react-redux').Provider,

    reducer = require('./reducer/index.js'),

    DevTools = require('./container/dev/devtools.jsx').default,
    Application = require('./container/application/application.jsx'),

    style = require('./index.sass');

var storeCreator  = compose(applyMiddleware(promiseMiddleware),DevTools.instrument())(createStore),
    store = storeCreator(reducer);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Application />
            <DevTools />
        </div>
    </Provider>,
    document.getElementById("app-placeholder")
);
