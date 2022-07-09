import { TOGGLE_NAVBAR, TOGGLE_MODAL } from '../actions/types';

const initialState = {
  navbarOpen: false,
  modalOpen: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_NAVBAR:
      return {
        ...state,
        navbarOpen: !state.navBarOpen
      };

    case TOGGLE_MODAL:
      return {
        ...state,
        modalOpen: !state.modalOpen
      };

    default:
      return state;
  }
};
