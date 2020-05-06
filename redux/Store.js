import { createStore } from 'redux';

const appState = {
  actualState: 0,
  stateMenuOpened: false
};

const reducer = (state = appState) => {
  return state;
};

export const store = createStore(reducer);
