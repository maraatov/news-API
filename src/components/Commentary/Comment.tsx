import React, {useEffect} from 'react';
import {FaUserAlt} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {CommentType, getSingleCommentsTC} from "../../store/commentReducer";
import {mapTime} from "../../utils/mapper";

type CommentPropsType = {
    id: number
}

export const Comment = ({id}: CommentPropsType ) => {

    const dispatch = useDispatch<any>()

    const data = useSelector<AppRootStateType, CommentType>(state => state.commentsData.comments[id])

    useEffect(() => {
        dispatch(getSingleCommentsTC(id))
        window.scrollTo(0, 0);
    }, [])


    return (
        <div className={'mt-10'}>
            <div className={'bg-black p-7 rounded-2xl'}>
                <div className={'flex items-center'}>
                    <FaUserAlt className={'text-[#3fc0f8] w-10 h-10'}/>
                    <div className={'text-white ml-5 font-bold'}>{data && data.by}</div>
                </div>
                <h1 className={'text-4xl font-bold text-white mt-6'} dangerouslySetInnerHTML={{__html: data && data.text}}></h1>
                <div className={'mt-4 flex justify-between'}>
                    <div className={'text-white'}>posted {mapTime(data && data.time)} ago</div>
                </div>
            </div>
        </div>
    );
};

