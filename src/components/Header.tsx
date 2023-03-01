import React from 'react';
import human from "../assets/human.webp"


export const Header = () => {
    return (
        <div>
            <div className={'flex items-center mt-7'}>
                <img src={human} className={'w-20 h-20 mr-3'}/>
                Welcome back,&nbsp;<span className={'font-bold'}>Aldiyar!</span>
            </div>
        </div>
    );
};

