import * as Action from '../actions/actionTypes';

const portfolioInitialState = {
  currentPortfolio: null,
};
export const portfolio = (state = portfolioInitialState, action) => {
  switch (action.type) {
    case Action.TEST_STATE:
      return {
        ...state,
        portfolioTest: false,
      };
    default:
      return state;
  }
};
