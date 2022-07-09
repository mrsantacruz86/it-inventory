import { TOGGLE_NAVBAR, TOGGLE_MODAL } from './types';

// Toggle navbar
export const toggleNavbar = () => {
  return {
    type: TOGGLE_NAVBAR
  };
};

// Open Modal Popup
export const toggleModal = () => {
  return {
    type: TOGGLE_MODAL
  };
};
