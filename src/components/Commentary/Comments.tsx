import React, {useEffect} from 'react';
import {Post} from "../Posts/Post";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {Comment} from "./Comment";
import {getSelectedId, NewsType} from "../../store/newsPageReducer";
import {useParams} from "react-router-dom";

export const Comments = () => {

    const dispatch = useDispatch<any>()
    const postId = useSelector<AppRootStateType, number>(state => state.newsPageData.selectedNews)
    const data = useSelector<AppRootStateType, NewsType>(state => state.newsPageData.news[postId])
    const params = useParams()

    useEffect(() => {
        dispatch(getSelectedId(Number(params.id)))
    }, [])

    return (
        <main className={'mt-10 w-[700px]'}>
            {postId && <Post id={postId}/>}
            <h1 className={'font-bold text-3xl mt-10 mb-10'}>Comments</h1>
            {data && data.kids?.map(t => <Comment key={t} id={t}/>)}
        </main>
    );
};

