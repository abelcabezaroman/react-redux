import charactersReducer from './charactersReducer';
import counterReducer from './counterReducer';
import todosReducer from './todosReducer';
import {combineReducers} from 'redux';
import chatBotReducer from './chatBotReducer';

//Combine all the sub reducers
const rootReducer = combineReducers({
    characters: charactersReducer,
    counter: counterReducer,
    todos: todosReducer,
    chatBot: chatBotReducer
})

export default rootReducer
