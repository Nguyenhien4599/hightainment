import React from 'react';
import clsx from 'clsx';

interface Props {
    title: string;
    children: React.ReactNode;
    isOpen?: boolean;
    closeModal?: Function;
}

export default function index({ title, children, isOpen, closeModal }: Props) {
    const handleClose = () => {
        if (closeModal) closeModal(false);
    };
    return (
        <section
            className={clsx(
                'hidden sm-md:block bg-[#222] py-3 rounded-t-lg fixed w-full transition-all duration-[860ms]',
                isOpen ? 'bottom-[79px]' : 'bottom-[-1000px]',
            )}
        >
            <div className="flex justify-between mb-[25px] px-6">
                <h2 className="text-white text-2xl leading-4 font-medium">{title}</h2>
                <span onClick={handleClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <g clip-path="url(#clip0_114_7017)">
                            <path
                                d="M1.25 18.75L18.75 1.25M18.75 18.75L1.25 1.25"
                                stroke="white"
                                strokeWidth="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_114_7017">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </span>
            </div>
            <nav className="ps-6 pe-3">
                <ul className="h-[390px] pe-2 overflow-y-scroll scrollbar-custom">{children}</ul>
            </nav>
        </section>
    );
}
