import { combineReducers } from 'redux';
import toDos from './ToDosReducer';

export default combineReducers({
    toDos,
});