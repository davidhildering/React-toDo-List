import {ADD_TODO, RE_ORDER_ITEMS, REMOVE_TODO, TODO_COMPLETED} from '../actions/actionTypes';

export const addToDo = (item) => ({
    type: ADD_TODO,
    item
});

export const reOrderItems = (toDos) => ({
    type: RE_ORDER_ITEMS,
    toDos
});

export const deleteToDo = (item) => ({
    type: REMOVE_TODO,
    item
});


export const toDoCompleted = (value, text) => ({
    type: TODO_COMPLETED,
    value,
    text
});