import React from 'react';
import { Link } from 'react-router-dom';

import logo from '@/assets/images/5f5356c6bf7ad09a4bc9223cf055cfcc.png';
import avatar from '@/assets/images/avatar.jpeg';
import iconHeader1 from '@/assets/images/iconHeader1.svg';
import iconHeader2 from '@/assets/images/iconHeader2.svg';
import ModalFilterSearchMobile from '@/components/modalFIlterSearchMobile';

export default function Index() {
    const [openDropdown, setOpenDropdown] = React.useState(false);
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleDropdown = () => setOpenDropdown(!openDropdown);
    const toggleModal = () => setIsOpen(!isOpen);

    return (
        <header className="flex w-full sm-md:flex-wrap">
            <div className="pt-9 px-6 pb-6 bg-customColor-bgSideBar min-w-[384px] sm-md:min-w-full sm-md:py-4 sm-md:ps-6 border-r border-r-[#ffffff1a]">
                <img src={logo} alt="logo" loading="lazy" className="sm-md:w-[67px] sm-md:h-[31px]" />
            </div>
            <div className="bg-customColor-bgSideBar relative sm-md:bg-customColor-bg sm-md:py-2 sm-md:px-4 py-6 px-[72px] w-full flex justify-end items-center">
                <form className="flex py-2 px-4 me-9 border-b border-b-[#666] sm-md:hidden">
                    <button className="me-3">
                        <img src={iconHeader1} alt="icon" />
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

                <img onClick={toggleDropdown} className="sm-md:hidden cursor-pointer" src={iconHeader2} alt="icon" />

                {openDropdown && (
                    <div className="absolute right-2 z-10 w-[166px] mt-2 top-[52%] bg-[#333] divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1" role="none">
                            <Link
                                className="block px-4 py-2 text-lg leading-none font-medium text-[#D8D8D8] hover:bg-[#535353]"
                                to="/profile"
                                onClick={toggleDropdown}
                            >
                                My page
                            </Link>
                            <Link
                                className="block px-4 py-2 text-lg leading-none font-medium text-[#D8D8D8] hover:bg-[#535353]"
                                to="/login"
                                onClick={toggleDropdown}
                            >
                                LogOut
                            </Link>
                        </div>
                    </div>
                )}

                <button
                    className="hidden sm-md:flex sm-md:items-center sm-md:gap-2 py-2 px-4 outline-none border border-customColor-primary w-full rounded-lg"
                    onClick={toggleModal}
                >
                    <img src={iconHeader1} alt="icon" />
                    <span className="text-xl leading-none text-[#999] font-bold">Search</span>
                </button>
            </div>
            <ModalFilterSearchMobile isOpen={isOpen} closeModal={setIsOpen} />
        </header>
    );
}
