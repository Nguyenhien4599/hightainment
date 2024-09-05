import React from 'react';
import { Link } from 'react-router-dom';

import logo from '@/assets/images/5f5356c6bf7ad09a4bc9223cf055cfcc.png';
import avatar from '@/assets/images/avatar.jpeg';

export default function Index() {
    const [openDropdown, setOpenDropdown] = React.useState(false);

    const toggleDropdown = () => setOpenDropdown(!openDropdown);

    return (
        <header className="flex w-full sm-md:flex-wrap">
            <div className="pt-9 px-6 pb-6 bg-customColor-bgSideBar min-w-[384px] sm-md:min-w-full sm-md:py-4 sm-md:ps-6 border-r border-r-[#ffffff1a]">
                <img src={logo} alt="logo" loading="lazy" className="sm-md:w-[67px] sm-md:h-[31px]" />
            </div>
            <div className="bg-customColor-bgSideBar relative sm-md:bg-customColor-bg sm-md:py-2 sm-md:px-4 py-6 px-[72px] w-full flex justify-end items-center">
                <form className="flex py-2 px-4 me-9 border-b border-b-[#666] sm-md:hidden">
                    <button className="me-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M18.8511 14.6085C20.4492 11.2632 19.8628 7.13498 17.0919 4.36407C13.5772 0.849348 7.87868 0.849348 4.36396 4.36407C0.849242 7.87879 0.849242 13.5773 4.36396 17.092C7.87868 20.6067 13.5772 20.6067 17.0919 17.092L20.6274 20.6275"
                                stroke="#EFA1BB"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    <input
                        type="text"
                        placeholder="Hightainment Search"
                        className="w-full bg-transparent outline-none border-none text-[#999] text-xl leading-none font-bold"
                    />
                </form>
                <img src={avatar} alt="avatar" className="w-[34px] h-[34px] rounded-full sm-md:hidden" />
                <p
                    onClick={toggleDropdown}
                    className="text-[#EAEAEA] text-[15px] ms-[10px] me-1 sm-md:hidden cursor-pointer"
                >
                    Calvin Klein
                </p>
                <span onClick={toggleDropdown} className="sm-md:hidden cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                        <path
                            d="M8.27611 11.5448C7.87592 12.0373 7.12408 12.0373 6.72389 11.5448L2.32486 6.13059C1.79387 5.47708 2.25894 4.5 3.10097 4.5H11.899C12.7411 4.5 13.2061 5.47708 12.6751 6.13059L8.27611 11.5448Z"
                            fill="#EAEAEA"
                        />
                    </svg>
                </span>
                {openDropdown && (
                    <div className="absolute right-2 z-10 w-[166px] mt-2 top-[52%] bg-[#333] divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1" role="none">
                            <Link
                                className="block px-4 py-2 text-lg leading-none font-medium text-[#D8D8D8] hover:bg-[#535353]"
                                to="/"
                            >
                                My page
                            </Link>
                            <Link
                                className="block px-4 py-2 text-lg leading-none font-medium text-[#D8D8D8] hover:bg-[#535353]"
                                to="/"
                            >
                                LogOut
                            </Link>
                        </div>
                    </div>
                )}

                <button className="hidden sm-md:flex sm-md:items-center sm-md:gap-2 py-2 px-4 outline-none border border-customColor-primary w-full rounded-lg">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M18.8511 14.6084C20.4492 11.263 19.8628 7.13485 17.0919 4.36394C13.5772 0.849226 7.87868 0.849226 4.36396 4.36394C0.849242 7.87866 0.849242 13.5771 4.36396 17.0919C7.87868 20.6066 13.5772 20.6066 17.0919 17.0919L20.6274 20.6274"
                                stroke="#EFA1BB"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                    <span className="text-xl leading-none text-[#999] font-bold">Search</span>
                </button>
            </div>
        </header>
    );
}
