import {Dispatch} from "redux";
import {commentAPI} from "../api/api";

type ActionsType = ReturnType<typeof setCommentsID>

export type CommentType = {
    id: number
    by: string
    parent: number
    time: number
    text: string
    type: string
}

export type InitStateType = {
    comments: {[key: number]: CommentType}
}

export const commentsInitState: InitStateType = {
    comments: {},
}

//REDUCER LOGIC
export const commentsReucer = (state:InitStateType = commentsInitState, action: ActionsType) => {
    switch (action.type) {
        case "SET_COMMENTS": {
            state.comments[action.comment.id] = action.comment
            return {...state}
        }
        default:
            return state
    }
}

//ACTION CREATORS

export const setCommentsID = (comment: CommentType) => ({
    type: "SET_COMMENTS" as const, comment
})

//THUNK CREATORS

export const getSingleCommentsTC = (comments: number) => async (dispatch: Dispatch) => {
    const singleComments = await commentAPI.getComments(comments)
    dispatch(setCommentsID(singleComments))
}
