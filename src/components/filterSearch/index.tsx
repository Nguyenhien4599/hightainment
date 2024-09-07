import clsx from 'clsx';
import DatePicker from 'react-datepicker';
import React from 'react';

import FilterSearchSelectItem from './FilterSearchSelectItem';
import styles from './styles.module.css';

const listFilter = [
    {
        text: 'Platform',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22 16V12C22 9.172 22 7.757 21.121 6.879C20.296 6.053 18.998 6.003 16.5 6V22C18.998 21.997 20.296 21.947 21.121 21.121C22 20.243 22 18.827 22 16ZM19 11.001C19.2652 11.001 19.5196 11.1064 19.7071 11.2939C19.8946 11.4814 20 11.7358 20 12.001C20 12.2662 19.8946 12.5206 19.7071 12.7081C19.5196 12.8956 19.2652 13.001 19 13.001C18.7348 13.001 18.4804 12.8956 18.2929 12.7081C18.1054 12.5206 18 12.2662 18 12.001C18 11.7358 18.1054 11.4814 18.2929 11.2939C18.4804 11.1064 18.7348 11.001 19 11.001ZM19 15.001C19.2652 15.001 19.5196 15.1064 19.7071 15.2939C19.8946 15.4814 20 15.7358 20 16.001C20 16.2662 19.8946 16.5206 19.7071 16.7081C19.5196 16.8956 19.2652 17.001 19 17.001C18.7348 17.001 18.4804 16.8956 18.2929 16.7081C18.1054 16.5206 18 16.2662 18 16.001C18 15.7358 18.1054 15.4814 18.2929 15.2939C18.4804 15.1064 18.7348 15.001 19 15.001Z"
                    fill="#EFA1BB"
                />
                <path
                    d="M15.57 3.488L13.415 6H15V22H8C5.172 22 3.757 22 2.879 21.121C2 20.243 2 18.828 2 16.001V12.001C2 9.171 2 7.757 2.879 6.879C3.757 6 5.172 6 8 6H10.584L8.43 3.488C8.30813 3.33617 8.25007 3.1429 8.2681 2.94905C8.28613 2.7552 8.37884 2.57596 8.52662 2.44921C8.6744 2.32247 8.86568 2.25816 9.06002 2.26987C9.25435 2.28159 9.43652 2.36842 9.568 2.512L12 5.348L14.43 2.512C14.5594 2.36082 14.7436 2.26726 14.942 2.25188C15.1404 2.2365 15.3368 2.30057 15.488 2.43C15.6392 2.55942 15.7327 2.7436 15.7481 2.94202C15.7635 3.14043 15.6994 3.33682 15.57 3.488Z"
                    fill="#EFA1BB"
                />
            </svg>
        ),
    },
    {
        text: 'Genre',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g clipPath="url(#clip0_704_1084)">
                    <mask
                        id="mask0_704_1084"
                        style={{ maskType: 'luminance' }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                    >
                        <path
                            d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z"
                            fill="white"
                            stroke="white"
                            strokeWidth="4"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M10 12V8.53601L13 10.268L16 12L13 13.732L10 15.464V12Z"
                            fill="black"
                            stroke="black"
                            strokeWidth="4"
                            strokeLinejoin="round"
                        />
                    </mask>
                    <g mask="url(#mask0_704_1084)">
                        <path d="M0 0H24V24H0V0Z" fill="#EFA1BB" />
                    </g>
                </g>
                <defs>
                    <clipPath id="clip0_704_1084">
                        <rect width="24" height="24" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        ),
    },
    {
        text: 'Tag Search',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                    d="M18.8511 14.6084C20.4492 11.263 19.8628 7.13485 17.0919 4.36394C13.5772 0.849226 7.87868 0.849226 4.36396 4.36394C0.849242 7.87866 0.849242 13.5771 4.36396 17.0919C7.87868 20.6066 13.5772 20.6066 17.0919 17.0919L20.6274 20.6274"
                    stroke="#EFA1BB"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },
];

export default function Index() {
    const refEl = React.useRef<HTMLDivElement | null>(null);
    const [openOptions, setOpenOptions] = React.useState(false);

    React.useEffect(() => {
        if (refEl.current && !openOptions) refEl.current.previousElementSibling?.classList.remove('border-r-0');
    }, [openOptions]);

    React.useEffect(() => {
        const handleCloseMenu = (e: MouseEvent) => {
            if (!refEl.current?.contains(e.target as Node)) setOpenOptions(false);
        };
        document.addEventListener('click', handleCloseMenu as EventListener);

        return () => {
            document.removeEventListener('click', handleCloseMenu as EventListener);
        };
    });

    const handleOpenOptions = () => {
        setOpenOptions(!openOptions);
        if (refEl.current) refEl.current.previousElementSibling?.classList.add('border-r-0');
    };

    return (
        <section className="flex gap-6">
            <div className="flex relative">
                <button className="w-[71px] h-[72px] flex justify-center items-center bg-customColor-primary cursor-pointer rounded-tl-lg rounded-bl-lg">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36" fill="none">
                            <path
                                d="M3.50001 18C3.50001 26.2845 10.2155 33 18.5 33C26.7845 33 33.5 26.2845 33.5 18C33.5 9.88314 27.0535 3.27242 19.001 3.00821C18.725 2.99915 18.5 3.22386 18.5 3.5V5.50004C18.5 5.77617 18.724 5.99893 18.9999 6.01045C21.6431 6.1208 24.1813 7.10224 26.2146 8.80924C28.3759 10.6236 29.8286 13.1416 30.3176 15.9207C30.8065 18.6999 30.3004 21.5625 28.8882 24.0055C27.4759 26.4486 25.2479 28.3158 22.5956 29.2791C19.9432 30.2424 17.0362 30.2402 14.3854 29.2729C11.7345 28.3055 9.50934 26.4349 8.10083 23.9897C6.69232 21.5445 6.19058 18.6812 6.68376 15.9027C7.15023 13.2748 8.47858 10.8818 10.4522 9.09782C10.6444 8.92414 10.9379 8.93791 11.1211 9.12105L13.1465 11.1464C13.4614 11.4614 14 11.2383 14 10.7929V3.5C14 3.22386 13.7761 3 13.5 3H6.20676C5.76136 3 5.53826 3.53847 5.85314 3.85348L8.28934 6.29068C8.49449 6.49592 8.48184 6.83159 8.26945 7.02932C6.83044 8.36901 5.66808 9.98035 4.85053 11.7723C3.95861 13.7272 3.498 15.8512 3.50001 18Z"
                                fill="white"
                            />
                        </svg>
                    </span>
                </button>
                {listFilter.map((f, i) => (
                    <FilterSearchSelectItem
                        openOptions={openOptions}
                        setOpenOptions={setOpenOptions}
                        placeholderText={f.text}
                        svgTag={f.icon}
                        key={i}
                    />
                ))}

                <div
                    className={clsx(
                        'relative cursor-pointer px-4 w-[280px] flex justify-center items-center gap-3 bg-[#333] border-b-0 rounded-tr-lg rounded-br-lg',
                        openOptions &&
                            `${styles['custom-item-filter-search']} rounded-br-none border !border-customColor-primary`,
                    )}
                    onClick={handleOpenOptions}
                    ref={refEl}
                >
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M5 12H19M12 19V5"
                                stroke="#EFA1BB"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                    <p className="w-full text-[#999] text-xl font-bold leading-none">Addtional</p>
                </div>

                {openOptions && (
                    <div className="w-full absolute top-full p-6 bg-[#333] border border-customColor-primary">
                        <section>
                            <h2 className="text-white text-2xl leading-5 font-bold mb-6">Date</h2>
                            <div className="grid grid-cols-[1fr_1fr_1fr] grid-rows-[46px_46px] gap-x-[14px] gap-y-[17px] mb-6">
                                <button className="w-full rounded-lg bg-[#333] border border-[#999] text-white text-left text-base leading-none font-bold cursor-pointer px-4">
                                    1895 ~ 1920
                                </button>
                                <button className="w-full rounded-lg bg-[#333] border border-[#999] text-white text-left text-base leading-none font-bold cursor-pointer px-4">
                                    1921 ~ 1950
                                </button>
                                <button className="w-full rounded-lg bg-[#333] border border-[#999] text-white text-left text-base leading-none font-bold cursor-pointer px-4">
                                    1951 ~ 1980
                                </button>
                                <button className="w-full rounded-lg bg-[#333] border border-[#999] text-white text-left text-base leading-none font-bold cursor-pointer px-4">
                                    1981 ~ 2010
                                </button>
                                <button className="w-full rounded-lg bg-[#333] border border-[#999] text-white text-left text-base leading-none font-bold cursor-pointer px-4">
                                    2011 ~
                                </button>
                                <button className="w-full rounded-lg bg-[#333] border border-[#999] text-white text-left text-base leading-none font-bold cursor-pointer px-4">
                                    New Release
                                </button>
                            </div>
                            <div className="grid grid-cols-[1fr_12px_1fr] gap-x-3">
                                <DatePicker
                                    placeholderText="Start date"
                                    className="w-full h-full rounded-lg bg-[#222] border border-[#434343] px-4 py-3 outline-none text-white text-base font-bold"
                                />

                                <span className="text-xl font-normal text-[#BBB] leading-none tracking-[-0.5px] self-center">
                                    ~
                                </span>

                                <DatePicker
                                    placeholderText="End date"
                                    className="w-full h-full rounded-lg bg-[#222] border border-[#434343] px-4 py-3 outline-none text-white text-base font-bold"
                                />
                            </div>
                        </section>
                        <section className="mt-6">
                            <h2 className="text-white font-bold text-2xl leading-5 ">Movie / TV Show</h2>
                            <div className="mt-6 grid grid-cols-[1fr_1fr] gap-x-[14px]">
                                <button className="border border-[#999] bg-[#999] rounded-lg text-white text-base leading-none font-bold px-4 py-[14px]">
                                    Movie
                                </button>
                                <button className="border border-[#999] bg-[#333] rounded-lg text-white text-base leading-none font-bold px-4 py-[14px]">
                                    TV Show
                                </button>
                            </div>
                        </section>
                    </div>
                )}
            </div>
            <div>
                <button className="h-full w-[176px] bg-[#666] text-customColor-primary border border-customColor-primary cursor-pointer text-xl font-bold rounded-lg">
                    Save Aura
                </button>
            </div>
        </section>
    );
}
