import React from 'react';
import { useNavigate } from 'react-router-dom';

import start from '@/assets/images/start.svg';

interface Props {
    img: string;
    title: string;
}

export default function Item({ title, img }: Props) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/movie/details');
    };

    return (
        <div
            onClick={handleClick}
            className="cursor-pointer grid grid-cols-[1fr] grid-rows-[1fr_100px] gap-y-[19px] sm-md:grid-cols-[127px] sm-md:grid-rows-[298px_1fr] md-lg:grid-cols-[205px] h-full"
        >
            <img src={img} alt="img" className="rounded-[20px] h-full w-full object-cover" />
            <div className="row-auto">
                <p className="text-customColor-primary text-base leading-none font-medium">{title}</p>
                <div className="flex gap-[3px] items-center mt-[10px]">
                    <img src={start} alt="icon" />
                    <span className="text-xs leading-none font-medium text-[#FFB798]">5.0</span>
                </div>
            </div>
        </div>
    );
}
