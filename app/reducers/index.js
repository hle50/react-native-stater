/**
 * Created by nois on 8/9/17.
 */
import { combineReducers } from 'redux';
import { profileReducer } from './profileReducer';
export default combineReducers({
  profile: profileReducer

})
