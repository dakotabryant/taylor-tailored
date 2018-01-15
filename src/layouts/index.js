import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../rootReducer';

import './index.sass';
import Footer from '../components/Footer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers());

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Taylor Bryant"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <Provider store={store}>{children()}</Provider>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
