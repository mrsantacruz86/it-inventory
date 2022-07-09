import _ from 'lodash';
import {
  FETCH_HOUSE_AUDITS,
  FETCH_HOUSE_AUDIT,
  CREATE_HOUSE_AUDIT,
  DELETE_HOUSE_AUDIT,
  EDIT_HOUSE_AUDIT
} from '../actions/types';
// @ts-ignore
// import items from '../utils/HouseAuditItems.json';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOUSE_AUDITS:
      return { ...state, ..._.mapKeys(action.payload, '_id') };

    case FETCH_HOUSE_AUDIT:
      return { ...state, [action.payload._id]: action.payload };

    case CREATE_HOUSE_AUDIT:
      return { ...state, [action.payload._id]: action.payload };

    case EDIT_HOUSE_AUDIT:
      return { ...state, [action.payload._id]: action.payload };

    case DELETE_HOUSE_AUDIT:
      return _.omit(state, action.payload);

    default:
      return state;
  }
};
