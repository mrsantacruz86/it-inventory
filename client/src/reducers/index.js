import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form'
import app from './appReducer';
import houseAudits from './houseAuditReducer';
// import houses from './houseReducer';
import authReducer from './authReducer';

export default combineReducers({
  app,
  auth: authReducer,
  houseAudits
  // houses
});
