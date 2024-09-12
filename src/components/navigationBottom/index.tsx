import React from 'react';
import { Link } from 'react-router-dom';

import ModalBottomToTop from '../modalBottomToTop';
import Item from '../sidebar/Item';
import { listSidebar } from '@/const/list';
import icon1 from '@/assets/images/iconNavBottom1.svg';
import icon2 from '@/assets/images/iconNavBottom2.svg';
import icon3 from '@/assets/images/iconNavBottom3.svg';

export default function Index() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isOpenDropdown, setIsOpenDropdown] = React.useState<number | null>(null);
    const [isActiveMobile, setIsActiveMobile] = React.useState<number | null>(null);

    const handleCLick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <section className="hidden fixed bottom-0 z-10 w-full bg-[#222] py-4 sm-md:block">
                <nav className="grid grid-cols-[1fr_1fr_1fr]">
                    <Link to="/" className="flex flex-col justify-center items-center">
                        <span>
                            <img src={icon1} alt="icon" />
                        </span>
                        <span className="text-[#999] text-xs font-medium uppercase inline-block mt-[10px]">home</span>
                    </Link>
                    <button
                        onClick={handleCLick}
                        className="flex flex-col justify-center items-center outline-none border-none"
                    >
                        <span>
                            <img src={icon2} alt="icon" />
                        </span>
                        <span className="text-[#999] text-xs font-medium inline-block mt-[10px]">My Auras</span>
                    </button>
                    <Link to="/" className="flex flex-col justify-center items-center">
                        <span>
                            <img src={icon3} alt="icon" />
                        </span>
                        <span className="text-[#999] text-xs font-medium inline-block mt-[10px]">MY page</span>
                    </Link>
                </nav>
            </section>
            <ModalBottomToTop title={'My Auras'} isOpen={isOpen} closeModal={setIsOpen}>
                {listSidebar.map((text, index) => (
                    <Item
                        title={text}
                        key={index}
                        indexItem={index}
                        isActiveMobile={index === isActiveMobile}
                        setIsActiveMobile={setIsActiveMobile}
                        isOpenDropdown={isOpenDropdown === index}
                        setIsOpen={() => setIsOpenDropdown(index)}
                    />
                ))}
            </ModalBottomToTop>
        </>
    );
}
