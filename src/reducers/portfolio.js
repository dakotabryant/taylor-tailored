import * as Action from '../actions/actionTypes';

const portfolioInitialState = {
  currentPortfolio: {
    title: '',
    tags: [],
    images: [],
    briefCopy: '',
    image: '',
  },
  currentPage: '/',
};
export const portfolio = (state = portfolioInitialState, action) => {
  switch (action.type) {
    case Action.SELECT_PORTFOLIO:
      return {
        ...state,
        currentPortfolio: action.item,
        currentPage: '/portfolio',
      };
    case Action.CLEAR_PORTFOLIO:
      return {
        ...state,
        currentPortfolio: {
          ...portfolioInitialState.currentPortfolio,
        },
        currentPage: '/',
      };
    case 'persist/REHYDRATE':
      return {
        ...state,
        persistedState: action.payload,
      };
    default:
      return state;
  }
};
