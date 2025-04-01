import { createStore, applyMiddleware, combineReducers } from 'redux'
import { thunk } from 'redux-thunk'
import ProductReducer from './ProductReducer'
import { loadState, saveState } from '../utils/localstorage'

let allProducts = loadState();

const store = createStore(combineReducers(
    {
        product:ProductReducer
    }
),allProducts,applyMiddleware(thunk));

store.subscribe(()=>{
    saveState(store.getState())
})

export default store;