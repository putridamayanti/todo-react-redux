let initialState = {
    loading: true,
    todos: [],
    error: ''
};

export default (state = initialState, action) => {
    const result = action.payload;
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                ...state,
                loading: false,
                todos: result.data
            };
        case 'FETCH_ERROR':
            return {
                ...state,
                loading: false,
                error: state.action.payload.data.message
            };
        case 'STORE_SUCCESS':
            return {
                ...state,
                loading: false,
                todo: result.data
            };
        case 'STORE_ERROR':
            return {
                ...state,
                error: 'Something wrong'
            };
        case 'UPDATE_SUCCESS':
            return {
                ...state,
                todo_update: result.data
            };
        case 'UPDATE_ERROR':
            return {
                ...state,
                error: 'Something wrong'
            };
        case 'DELETE_SUCCESS':
            return {
                ...state,
                todo_delete: result.data
            };
        case 'DELETE_ERROR':
            return {
                ...state,
                error: 'Something wrong'
            };
        default:
            return state;
    }
    
}
