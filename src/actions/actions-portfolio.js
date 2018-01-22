import * as Action from './actionTypes';

export const selectPortfolio = item => ({
  type: Action.SELECT_PORTFOLIO,
  item,
});
export const clearPortfolio = () => ({
  type: Action.CLEAR_PORTFOLIO,
});

export const clearPage = () => ({
  type: Action.CLEAR_PAGE,
});
