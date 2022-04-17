const initState = 5
const counterReducer = (state = initState, action) => {
    console.log('##ABEL## >> s >>  counterReducer', state);
    switch (action.type) {
        case 'INCREMENT_COUNT':
            return state + 1

        case 'INCREMENT_COUNT_TEN':
            return state + 10
        case 'DOUBLE_COUNT':
            return state * 2

        case 'DECREMENT_COUNT_TEN':
            return state - 10

        case 'DECREMENT_COUNT':
            return state - 1

        case 'RESET_COUNT':
            return 0

        default:
            return state
    }
}

export default counterReducer;
