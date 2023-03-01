import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {getNewsIDTC} from "../../store/newsPageReducer";
import {Post} from "./Post";


export const Posts: React.FC = () => {

    const users = useSelector<AppRootStateType, number[]>(state => state.newsPageData.newsID)
    const dispatch = useDispatch<any>()
    const [news, setNews] = React.useState(10)


    useEffect(() => {
        dispatch(getNewsIDTC())
    }, [])

    const usersMap = users.slice(0, news)


    return (
        <div>
            <header className={'mt-10 font-bold text-2xl'}>Popular Posts</header>
            <div className={'grid grid-cols-2'}>
                {usersMap.map(id => <Post key={id} id={id}/>)}
            </div>
            <div className={'flex justify-center mt-20'}><button className={'bg-[#3fc0f8] font-bold p-10 w-[300px] rounded-2xl hover:cursor-pointer'} onClick={() => setNews(news + 10)}>More</button></div>
        </div>
    );
};

