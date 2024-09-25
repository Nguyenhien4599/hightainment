import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import avatar from '@/assets/images/avatar.jpeg';
import icon from '@/assets/images/c10.svg';
import iconClose from '@/assets/images/iconModalBottomToTop.svg';
import { listValidTypesAvatar } from '@/const/list';

export default function Edit() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [urlAvatar, setUrlAvatar] = React.useState(avatar);
    const refToTop = React.useRef(null);
    const refFile = React.useRef(null);

    React.useEffect(() => {
        if (isOpen) refToTop.current.scrollIntoView({ behavior: 'smooth' });
        return () => {
            URL.revokeObjectURL(urlAvatar);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    const handleToggleOpenModal = () => {
        setIsOpen(!isOpen);
    };

    const handleChangeAvatar = () => {
        refFile.current.click();
    };
    const handleChangeFile = () => {
        const file = refFile.current.files[0];
        if (file) {
            if (!listValidTypesAvatar.includes(file.type)) {
                toast.error('Invalid file type selected, an image selection is required.');
                return;
            }
            const url = URL.createObjectURL(file);
            setUrlAvatar(url);
        }
    };

    return (
        <section className="sm-md:pe-6" ref={refToTop}>
            <header>
                <div className="relative w-[200px] h-[200px] sm-md:w-[100%] sm-md:h-[100%] flex justify-center items-center">
                    <img
                        src={urlAvatar}
                        alt="avatar"
                        className="w-[180px] h-[180px] sm-md:w-[80px] sm-md:h-[80px] rounded-full"
                    />
                    <span
                        onClick={handleChangeAvatar}
                        className="absolute top-[78%] left-[68%]  w-9 h-9 sm-md:w-6 sm-md:h-6 sm-md:top-[80%] sm-md:left-[54%] bg-[#333] rounded-full flex justify-center items-center cursor-pointer"
                    >
                        <img src={icon} alt="icon" className="sm-md:w-4 sm-md:h-4" />
                    </span>
                    <input
                        type="file"
                        className="absolute top-[10000px] opacity-0 invisible"
                        ref={refFile}
                        onChange={handleChangeFile}
                    />
                </div>
            </header>
            <section className="mt-[55px]">
                <h3 className="text-white text-[32px] sm-md:text-2xl sm-md:leading-none font-normal font-Anton mb-4">
                    PERSONAL INFORMATION
                </h3>
                <div className="grid grid-cols-[150px_1fr] gap-x-6 mb-6 sm-md:gap-x-3 sm-md:grid-cols-[130px_1fr]">
                    <span className="text-2xl sm-md:text-xl leading-none font-medium text-white">Current name</span>
                    <span className="text-2xl self-start sm-md:text-xl leading-none font-bold text-white">
                        Calvin Klein
                    </span>
                </div>
                <div>
                    <label className="block text-base leading-none text-white font-medium">First and Last name</label>
                    <input
                        type="text"
                        className="text-white w-full font-medium text-2xl leading-none pt-4 pb-2 bg-transparent outline-none border-b border-b-[#D9D9D9]"
                    />
                </div>
                <div className="flex justify-end mt-4 gap-8">
                    <button className="text-2xl sm-md:text-xl leading-none font-normal text-[#EAEAEA]">Cancel</button>
                    <button className="bg-customColor-primary text-2xl sm-md:text-xl text-white px-3 py-[6px] text-center rounded-lg border border-[#999999]">
                        Update
                    </button>
                </div>
            </section>
            <section className="mt-[55px]">
                <h3 className="text-white text-[32px] sm-md:text-2xl font-normal font-Anton mb-4">EMAIL ADDRESS</h3>
                <div className="grid grid-cols-[150px_1fr] gap-x-6 mb-6 sm-md:gap-x-3 sm-md:grid-cols-[130px_1fr]">
                    <span className="text-2xl sm-md:text-xl leading-none font-medium text-white">Current email</span>
                    <span className="text-2xl self-start sm-md:text-xl leading-none font-bold text-white show-ellipsis">
                        avan123@avansoft.co.kr
                    </span>
                </div>
                <div>
                    <label className="block  text-base leading-none text-white font-medium">E-mail</label>
                    <input
                        type="text"
                        className="text-white w-full font-medium text-2xl leading-none pt-4 pb-2 bg-transparent outline-none border-b border-b-[#D9D9D9]"
                    />
                </div>
                <div className="flex justify-end mt-4 gap-8">
                    <button className="text-2xl sm-md:text-xl leading-none font-normal text-[#EAEAEA]">Cancel</button>
                    <button className="bg-customColor-primary text-2xl sm-md:text-xl text-white px-3 py-[6px] text-center rounded-lg border border-[#999999]">
                        Update
                    </button>
                </div>
            </section>
            <nav className="mt-[100px]">
                <Link to="/profile" className="block mb-8 text-white text-2xl sm-md:text-xl leading-none font-normal">
                    My Page
                </Link>
                <Link to="/login" className="block mb-8 text-white text-2xl sm-md:text-xl leading-none font-normal">
                    Log Out
                </Link>
                <span
                    className="block text-white text-2xl sm-md:text-xl leading-none font-normal cursor-pointer"
                    onClick={handleToggleOpenModal}
                >
                    Cancel Account
                </span>
            </nav>
            {isOpen && (
                <div className="absolute border border-customColor-primary p-6 bg-customColor-bgSideBar top-1/2 left-1/2 -translate-x-2/4 -translate-y-1/2 text-white rounded-[9px] w-[68%] sm-md:translate-x-0 sm-md:translate-y-0 sm-md:top-1/4 sm-md:w-[96%] sm-md:left-[2%] sm-md:p-5">
                    <header className="mb-9 flex justify-between items-center">
                        <h3 className="font-normal text-xl leading-none font-Anton">Cancel Account</h3>
                        <img src={iconClose} alt="icon" className="cursor-pointer" onClick={handleToggleOpenModal} />
                    </header>
                    <p className="text-base font-semibold mb-9">
                        Matters to be familiar with before withdrawal of membership
                    </p>
                    <p className="font-normal text-base leading-none">
                        1. Even after you leave the membership, you may still receive service-related emails for a
                        certain period of time.
                    </p>
                    <p className="font-normal text-base leading-none mb-9">
                        2. After leaving, all membership information is deleted and cannot be recovered.
                    </p>
                    <p className="font-normal text-base leading-none">Thank you for using the right now.</p>
                    <p className="font-normal text-base leading-none mb-9">
                        I'll try to see customers again with better services.
                    </p>
                    <button className="w-[427px] h-[66px] bg-customColor-primary text-center font-normal text-[28px] rounded-lg outline-none font-Anton block mx-auto sm-md:w-full">
                        Cancel Account
                    </button>
                </div>
            )}
        </section>
    );
}
