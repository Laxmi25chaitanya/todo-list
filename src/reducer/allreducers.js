import {combineReducers} from 'redux';
import {todos} from './index';
import visibilityFilter from './index';
const todoApp=combineReducers({
    todos,
    visibilityFilter
})
export default todoApp;