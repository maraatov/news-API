import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk'
import {newsPageReducer} from "./newsPageReducer";
import {commentsReucer} from "./commentReducer";


const rootReducer = combineReducers({
    newsPageData: newsPageReducer,
    commentsData: commentsReucer
})

export const store = createStore(rootReducer ,applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store