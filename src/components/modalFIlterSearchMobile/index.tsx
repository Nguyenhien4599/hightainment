import React from 'react';
import clsx from 'clsx';

import iconBack from '@/assets/images/iconModalSearch.svg';
import iconHeader1 from '@/assets/images/iconHeader1.svg';
import logo from '@/assets/images/5f5356c6bf7ad09a4bc9223cf055cfcc.png';
import FilterSearch from '@/components/filterSearch';

interface Props {
    isOpen: boolean;
    closeModal: Function;
}

export default function Index({ isOpen, closeModal }: Props) {
    const handleCloseModal = () => {
        closeModal(false);
    };

    return (
        <section
            className={clsx(
                'fixed bottom-0 z-20 w-full bg-customColor-bg px-6 pt-3 pb-[38px] transition-all duration-[860ms]',
                isOpen ? 'top-0' : 'top-[1000px]',
            )}
        >
            <span className="inline-block mb-5" onClick={handleCloseModal}>
                <img src={iconBack} alt="icon" />
            </span>
            <div className="mb-9">
                <img src={logo} alt="logo" loading="lazy" className="w-[67px] h-[31px]" />
            </div>
            <form className="flex py-2 border-b border-b-[#666] mb-6">
                <button className="me-3">
                    <img src={iconHeader1} alt="icon" />
                </button>
                <input
                    type="text"
                    placeholder="Hightainment Search"
                    className="w-full bg-transparent outline-none border-none text-[#999] text-xl leading-none font-bold"
                />
            </form>
            {/* <FilterSearch /> */}
        </section>
    );
}
