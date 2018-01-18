import * as Action from '../actions/actionTypes';

const portfolioInitialState = {
  currentPortfolio: {
    title: '',
    tags: [],
    images: [],
    briefCopy: '',
    image: '',
  },
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
        currentPortfolio: {
          ...portfolioInitialState.currentPortfolio,
        },
      };
    default:
      return state;
  }
};
