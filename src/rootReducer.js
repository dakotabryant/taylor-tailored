import { combineReducers } from 'redux';

import { portfolio } from './reducers/portfolio';

const rootReducer = combineReducers({
  portfolio,
});

export default rootReducer;
