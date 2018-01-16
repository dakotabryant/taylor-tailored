import * as Action from '../actions/actionTypes';

const portfolioInitialState = {
  currentPortfolio: null,
};
export const portfolio = (state = portfolioInitialState, action) => {
  switch (action.type) {
    case Action.SELECT_PORTFOLIO:
      return {
        ...state,
        currentPortfolio: action.item,
      };
    case Action.CLEAR_PORTFOLIO:
      return {
        ...state,
        currentPortfolio: null,
      };
    default:
      return state;
  }
};
