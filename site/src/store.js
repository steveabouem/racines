import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import  mainReducer from './reducers';

const initialState = {};
const middleware = [thunk];
export const store = createStore(mainReducer, initialState, compose(applyMiddleware(...middleware)));

// export default store;