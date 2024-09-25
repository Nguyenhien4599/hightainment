import React from 'react';

import img from '@/assets/images/c14.png';
import playIcon from '@/assets/images/playIcon.svg';

export default function ItemVideo() {
    return (
        <div className="grid grid-cols-[365px] relative">
            <img src={img} alt="alt" className="rounded-lg" />
            <span className="absolute top-[62%] left-[6%] cursor-pointer w-6 h-6 rounded-full border border-[#FFF] block flex justify-center items-center">
                <img src={playIcon} alt="icon" />
            </span>
            <p className="show-ellipsis text-lg leading-none text-customColor-primary font-bold mt-4">
                Rocketman (2019) - Official Teaser Trailer - Paramount Pictures
            </p>
            <span className="font-normal text-[#EAEAEA] text-xs leading-none ">2018 . 10 . 01</span>
        </div>
    );
}
