/*****   Important  *******
* You have to be careful with import Alias name if you want to use
* TypeScript/ES6 property shorthand notation eg. { contributors }
* with this notation means that you write the key like value name
*
* {contributorsReducer} =======> {contributorsReducer : contributorsReducer}
*
* import { combineReducers } from 'redux';
* import contributorsReducer from './contributors';
*
* export default combineReducers({
*  contributors: contributorsReducer
* });
*
* contributors property is used in MapStateToProps method by state.contributors
*
* If you write {contributorsReducer} you have to use state.contributorsReducer
*/
import { combineReducers } from 'redux';
import member from './memberReducer';
import members from './membersReducer';

export default combineReducers({
  member
  ,members
});
