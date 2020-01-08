import { combineReducers } from 'redux';
import TodoReducer from './TodoReducer'
import { reducer as formReducer } from 'redux-form';

const reducers = {
    todoStore: TodoReducer,
    form: formReducer
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
