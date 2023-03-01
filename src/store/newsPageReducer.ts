import {Dispatch} from "redux";
import {ordersAPI} from "../api/api";
import {NavigateFunction} from "react-router-dom";

type ActionsType = ReturnType<typeof setNewsID> | ReturnType<typeof setSingleNews> | ReturnType<typeof selectedNewsID>

export type NewsType = {
    id: number
    by: string
    url: string
    time: number
    title: string
    score: number
    kids: number[] | undefined
    descendants: number
}

export type InitStateType = {
    news: {[key: number]: NewsType}
    newsID: number[],
    selectedNews: number
}

export const newsInitState: InitStateType = {
    news: {},
    newsID: [],
    selectedNews: 0
}

//REDUCER LOGIC
export const newsPageReducer = (state:InitStateType = newsInitState, action: ActionsType) => {
    switch (action.type) {
        case 'SET_NEWS_ID': {
            return {
                ...state,
                newsID: action.newID
            }
        }
        case 'SET_SINGLE_NEWS': {
            state.news[action.singleNews.id] = action.singleNews
            return {...state}
        }
        case 'SET_ID_NEWS': {
            state.selectedNews = action.id
            return {...state}
        }
        default:
            return state
    }
}

//ACTION CREATORS

export const setNewsID = (newID: number[]) => ({
    type: "SET_NEWS_ID" as const, newID
})

export const setSingleNews = (singleNews: NewsType) => ({
    type: "SET_SINGLE_NEWS" as const, singleNews
})

export const selectedNewsID = (id: number) => ({
    type: 'SET_ID_NEWS' as const, id
})

//THUNK CREATORS

export const getSingleNewsTC = (singleNewsId: number) => async (dispatch: Dispatch) => {
    const singleNews = await ordersAPI.getSingleNews(singleNewsId)
    dispatch(setSingleNews(singleNews))
}

export const getNewsIDTC = () => async (dispatch: Dispatch) => {
    const newsIDs = await ordersAPI.getNewsID()
    dispatch(setNewsID(newsIDs))
}

export const getSelectedId = (id: number) => async (dispatch: Dispatch) => {
    dispatch(selectedNewsID(id))
}