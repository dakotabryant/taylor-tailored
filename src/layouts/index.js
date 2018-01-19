import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../rootReducer';
import { loadState, saveState } from '../localStorage.js';

import './index.sass';
import Footer from '../components/Footer';

const persistedState = loadState();
let composeEnhancers;
let store = createStore(rootReducer, persistedState);

if (typeof window !== 'undefined') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  store = createStore(rootReducer, persistedState, composeEnhancers());
  store.subscribe(() => {
    saveState(store.getState());
  });
}

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Taylor Bryant"
      meta={[
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0',
        },
      ]}
    />
    <Provider store={store}>{children()}</Provider>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
