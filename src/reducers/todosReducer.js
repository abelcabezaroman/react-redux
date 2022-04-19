const initState =  [
        {
            id: 1,
            content: 'Play video game'
        }, {
            id: 2,
            content: 'Learn nodejs & php'
        }, {
            id: 3,
            content: 'Join meetup event'
        }
    ]

const todosReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                    ...state,
                    action.payload
                ]
        case 'REMOVE_TODO':
            return action.payload
        default:
            return state
    }
}

export default todosReducer;
