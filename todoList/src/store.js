import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
//import thunk from "redux-thunk";
//import { composeWithDevTools } from "redux-devtools-extension";
import Todoreducer from './reducers/Todoreducer';
//import TodoAction from './action/TodoAction';

const reducer = combineReducers({
    Todo: Todoreducer                        //combined reducers
    /*reducers go here*/                
});

const initialState = {};

//const middleware = [thunk]; //there can be multiple middlewares here

const store =  legacy_createStore(
    reducer,
    initialState,
    applyMiddleware(thunk)
    );

export default store;
