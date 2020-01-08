import { Client } from './Client';

export function fetchTodo() {
    return async dispatch => {
        const response = await Client.get('todo');
        dispatch({
            type: 'FETCH_SUCCESS',
            payload: response
        })
    }
}

export function storeTodo(params) {
    return async dispatch => {
        try {
            const response = await Client.post('todo', params);
            console.log(response);
            dispatch({
                type: 'STORE_SUCCESS',
                payload: response
            })
        } catch(e) {
            console.log(e);
        }

    }
}

export function updateTodo(id, params) {
    console.log(params);
    return async dispatch => {
        try {
            const response = await Client.put('todo/' + id, params);
            console.log(response);
            dispatch({
                type: 'UPDATE_SUCCESS',
                payload: response
            })
        } catch(e) {
            console.log(e);
        }
    }
}

export function deleteTodo(id) {
    return async dispatch => {
        const response = await Client.delete('todo/' + id);
        dispatch({
            type: 'DELETE_SUCCESS',
            payload: response
        })
    }
}
