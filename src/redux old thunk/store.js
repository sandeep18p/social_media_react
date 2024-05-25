import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import dataReducer from './dataReducer'

const rootReducer = combineReducers({
    posts:dataReducer,
})
 
const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;