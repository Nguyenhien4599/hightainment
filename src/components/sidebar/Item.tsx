import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import iconSidebar1 from '@/assets/images/iconSidebar1.svg';
import iconSidebar2 from '@/assets/images/iconSidebar2.svg';

interface Props {
    title: string;
    isActiveMobile?: boolean;
    setIsActiveMobile?: Function;
    indexItem?: number;
    isOpenDropdown?: boolean;
    setIsOpen?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Item({
    title,
    isActiveMobile,
    setIsActiveMobile,
    indexItem,
    isOpenDropdown,
    setIsOpen,
}: Props) {
    const handleClick = () => {
        setIsActiveMobile && setIsActiveMobile(indexItem);
    };

    return (
        <li
            onClick={handleClick}
            className={clsx(
                'relative py-2 ps-2 pe-4 grid grid-cols-[42px_1fr_3px] gap-2 lg:hover:bg-[#333] sm-md:grid-cols-[1fr_3px] sm-md:bg-[#666] sm-md:mb-4 sm-md:rounded-lg sm-md:p-2 hover:rounded-lg',
                isActiveMobile ? 'sm-md:bg-[#999]' : '',
            )}
        >
            <span className="h-[42px] rounded-full bg-[#666666] flex justify-center items-center sm-md:hidden">
                <img src={iconSidebar1} alt="icon" />
            </span>
            <Link className="text-lg leading-none text-white font-bold self-center" to="/">
                {title}
            </Link>
            <span className="self-center cursor-pointer" onClick={setIsOpen}>
                <img src={iconSidebar2} alt="icon" />
            </span>
            {isOpenDropdown && (
                <div className="absolute right-0 z-10 w-[166px] mt-2 top-[88%] bg-[#333] divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1" role="none">
                        <Link
                            className="block px-4 py-2 text-lg leading-none font-medium text-[#D8D8D8] hover:bg-[#535353]"
                            to="/"
                        >
                            Edit
                        </Link>
                        <Link
                            className="block px-4 py-2 text-lg leading-none font-medium text-[#D8D8D8] hover:bg-[#535353]"
                            to="/"
                        >
                            Delete
                        </Link>
                    </div>
                </div>
            )}
        </li>
    );
}
