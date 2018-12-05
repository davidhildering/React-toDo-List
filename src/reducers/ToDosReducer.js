import {ADD_TODO, RE_ORDER_ITEMS, REMOVE_TODO, TODO_COMPLETED} from '../actions/actionTypes';

export default (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [ ...state, action.item];
        case RE_ORDER_ITEMS:
            console.log('action', action);
            return action.toDos;
        case REMOVE_TODO:
           return [...state].filter(function(item) {
                return item.text !== action.item
            });
        case TODO_COMPLETED:
            const toDos = [...state];
           return toDos.map(todo => {
               if (todo.text !== action.text) {
                   return todo
               }
                return {...todo, completed: !todo.completed}
            });
            default:
            return state
    }
}