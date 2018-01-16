import * as Action from './actionTypes';

export const selectPortfolio = item => ({
  type: Action.SELECT_PORTFOLIO,
  item,
});
export const clearPortfolio = () => ({
  type: Action.CLEAR_PORTFOLIO,
});
