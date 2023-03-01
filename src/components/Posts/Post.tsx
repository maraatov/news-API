import React, {useEffect} from 'react';
import {FaUserAlt} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {getSelectedId, getSingleNewsTC, NewsType} from "../../store/newsPageReducer";
import {mapTime} from "../../utils/mapper";
import {NavLink, useLocation} from "react-router-dom";

type PostPropsType = {
    id: number
}

export const Post = ({id}: PostPropsType) => {

    const dispatch = useDispatch<any>()
    const data = useSelector<AppRootStateType, NewsType>(state => state.newsPageData.news[id])
    const location = useLocation()
    const currentLocation = location.pathname.split('/')[1]

    useEffect(() => {
        dispatch(getSingleNewsTC(id))
    }, [id])

    const commentClass = 'mr-3 bg-[#3fc0f8] font-bold p-4 rounded-2xl hover:cursor-pointer'

    const showComments = () => {
        currentLocation !== 'post' ? dispatch(getSelectedId(data.id)) : ''
    }

    return (
        <main className={'mt-10 w-[700px]'}>
            <div className={'bg-black p-7 rounded-2xl'}>
                <div className={'flex items-center'}>
                    <FaUserAlt className={'text-[#3fc0f8] w-10 h-10'}/>
                    <div className={'text-white ml-5 font-bold'}>{data ? data.by : 'loading'}</div>
                </div>
                <h1 className={'text-4xl font-bold text-white mt-6'}>{data ? data.title : 'loading'}</h1>
                <p className={'text-white mt-5'}>Raiting: {data ? data.score : 'loading'}</p>
                <div className={'mt-4 flex justify-between'}>
                    <div className={'text-white'}>posted {data ? mapTime(data.time) : 'loading'} ago</div>
                    <NavLink className={currentLocation ? commentClass : `${commentClass} hover:text-white`} onClick={showComments} to={`/post/${data ? data.id : ''}`}>comments: {data ? (data.kids?.length ? data.kids.length : 0) : 'no comments'}</NavLink>
                </div>
            </div>
        </main>
    );
};
