import clsx from 'clsx';
import React from 'react';
import DatePicker from 'react-datepicker';

import FilterSearchSelectItem from './FilterSearchSelectItem';
import Button from './Button';
import { listBtnFilterDate, listBtnFilterMovie, listFilter } from '@/const/list';
import iconSearch from '@/assets/images/icon4.svg';
import iconAdd from '@/assets/images/icon5.svg';
import styles from './styles.module.css';

export default function Index() {
    const refEl = React.useRef<HTMLDivElement | null>(null);
    const optionsRef = React.useRef<HTMLDivElement | null>(null);
    const [openOptions, setOpenOptions] = React.useState(false);
    const [startDate, setStartDate] = React.useState<Date | undefined>(undefined);
    const [endDate, setEndDate] = React.useState<Date | undefined>(undefined);
    const [isActiveDate, setActiveDate] = React.useState<number | null>(null);
    const [isActiveMovie, setActiveMovie] = React.useState<number | null>(null);
    const [openOptionsProps, setOpenOptionsProps] = React.useState<number | null>(null);

    React.useEffect(() => {
        if (openOptions && refEl.current && window.matchMedia('(max-width: 768px)').matches)
            refEl.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        const handleCloseMenu = (e: MouseEvent) => {
            const target = e.target as Node;
            if (
                !optionsRef.current?.contains(target) &&
                !refEl.current?.contains(target) &&
                openOptions &&
                !(target as Element).classList.contains('react-datepicker__day')
            ) {
                setOpenOptions(false);
            }
        };

        if (refEl.current && !openOptions) refEl.current.previousElementSibling?.classList.remove('border-r-0');
        document.addEventListener('click', handleCloseMenu as EventListener);

        return () => {
            document.removeEventListener('click', handleCloseMenu as EventListener);
        };
    }, [openOptions]);

    const handleOpenOptions = () => {
        setOpenOptions(!openOptions);
        setOpenOptionsProps(null);
        if (refEl.current) refEl.current.previousElementSibling?.classList.add('border-r-0');
    };

    const handleSelectDate = (type: string) => (val: any | undefined) => {
        if (type === 'start') setStartDate(val);
        else setEndDate(val);
    };

    return (
        <section className="flex justify-between gap-6 sm-md:flex-col">
            <div className="grid grid-cols-[71px_1fr_1fr_1fr_1fr] flex-1 relative sm-md:flex sm-md:flex-col sm-md:gap-6">
                <button className="w-full h-[72px] flex justify-center items-center bg-customColor-primary cursor-pointer rounded-tl-lg rounded-bl-lg sm-md:ms-auto sm-md:w-[103px] sm-md:h-[32px] sm-md:rounded-[52px] sm-md:justify-between sm-md:px-3">
                    <img src={iconSearch} alt="icon" className="sm-md:w-6 sm-md:h-6" />
                    <span className="hidden sm-md:block text-[#EAEAEA] font-bold text-[15px]">Reset</span>
                </button>
                {listFilter.map((f, i) => (
                    <FilterSearchSelectItem
                        openOptions={openOptions}
                        setOpenOptions={setOpenOptions}
                        placeholderText={f.text}
                        svgTag={f.icon}
                        key={i}
                        openOptionsProps={openOptionsProps === i}
                        setOpenOptionsProps={setOpenOptionsProps}
                        idx={i}
                    />
                ))}

                <div
                    className={clsx(
                        'relative cursor-pointer px-4 w-[280px] xl:w-auto flex justify-center items-center gap-3 bg-[#333] border-b-0 rounded-tr-lg rounded-br-lg sm-md:w-full sm-md:rounded-[5px] sm-md:h-[82px]',
                        openOptions &&
                            `${styles['custom-item-filter-search']} rounded-br-none border !border-customColor-primary sm-md:rounded-b-none`,
                    )}
                    onClick={handleOpenOptions}
                    ref={refEl}
                >
                    <img src={iconAdd} alt="icon" />
                    <p className="w-full text-[#999] text-xl font-bold leading-none">Addtional</p>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M5.00032 7.75C4.85208 7.75013 4.7072 7.79419 4.58399 7.87661C4.46077 7.95903 4.36474 8.07611 4.30803 8.21308C4.25132 8.35004 4.23647 8.50074 4.26535 8.64614C4.29424 8.79154 4.36556 8.92511 4.47032 9.03L11.4703 16.03C11.6109 16.1705 11.8016 16.2493 12.0003 16.2493C12.1991 16.2493 12.3897 16.1705 12.5303 16.03L19.5303 9.03C19.6351 8.92511 19.7064 8.79154 19.7353 8.64614C19.7642 8.50074 19.7493 8.35004 19.6926 8.21308C19.6359 8.07611 19.5399 7.95903 19.4166 7.87661C19.2934 7.79419 19.1486 7.75013 19.0003 7.75L5.00032 7.75Z"
                                fill="#666666"
                            />
                        </svg>
                    </span>
                </div>

                {openOptions && (
                    <div
                        ref={optionsRef}
                        className="w-full absolute top-full p-6 bg-[#333] border border-customColor-primary z-10"
                    >
                        <section>
                            <h2 className="text-white text-2xl leading-5 font-bold mb-6 sm-md:mb-4">Date</h2>
                            <div className="grid grid-cols-[1fr_1fr_1fr] grid-rows-[46px_46px] gap-x-[14px] gap-y-[17px] mb-6 sm-md:grid-cols-[1fr] sm-md:grid-rows-[repeat(6,46px)] sm-md:gap-3 sm-md:mb-4">
                                {listBtnFilterDate.map((t, i) => (
                                    <Button
                                        key={i}
                                        isActive={i === isActiveDate}
                                        setActiveDate={() => setActiveDate(i)}
                                        classText="w-full rounded-lg bg-[#333] border border-[#999] text-white text-left text-base leading-none font-bold cursor-pointer px-4"
                                    >
                                        {t}
                                    </Button>
                                ))}
                            </div>
                            <div className="grid grid-cols-[1fr_12px_1fr] gap-x-3 sm-md:gap-x-1">
                                <DatePicker
                                    selected={startDate}
                                    placeholderText="Start date"
                                    dateFormat="dd/MM/yyyy"
                                    onChange={handleSelectDate('start')}
                                    className="w-full h-full rounded-lg bg-[#222] border border-[#434343] px-4 py-3 outline-none text-white text-base font-bold"
                                />

                                <span className="text-xl font-normal text-[#BBB] leading-none tracking-[-0.5px] self-center">
                                    ~
                                </span>

                                <DatePicker
                                    selected={endDate}
                                    placeholderText="End date"
                                    onChange={handleSelectDate('end')}
                                    dateFormat="dd/MM/yyyy"
                                    className="w-full h-full rounded-lg bg-[#222] border border-[#434343] px-4 py-3 outline-none text-white text-base font-bold"
                                />
                            </div>
                        </section>
                        <section className="mt-6">
                            <h2 className="text-white font-bold text-2xl leading-5 ">Movie / TV Show</h2>
                            <div className="mt-6 grid grid-cols-[1fr_1fr] gap-x-[14px] sm-md:grid-cols-[1fr] sm-md:gap-y-6">
                                {listBtnFilterMovie.map((t, i) => (
                                    <Button
                                        key={i}
                                        isActive={i === isActiveMovie}
                                        setActiveDate={() => setActiveMovie(i)}
                                        classText={
                                            'border border-[#999] bg-[#333] rounded-lg text-white text-base leading-none font-bold px-4 py-[14px]'
                                        }
                                    >
                                        {t}
                                    </Button>
                                ))}
                            </div>
                        </section>
                    </div>
                )}
            </div>
            <div className="sm-md:grid sm-md:grid-cols-[1fr_1fr] sm-md:grid-rows-[48px] sm-md:gap-3">
                <button className="h-full w-[176px] xl:w-[150px] bg-[#666] text-customColor-primary border border-customColor-primary cursor-pointer text-xl xl:text-lg leading-none font-bold rounded-lg sm-md:w-full">
                    Save Aura
                </button>
                <button className=" hidden h-full w-full text-white bg-customColor-primary cursor-pointer text-xl leading-none font-bold rounded-lg sm-md:block">
                    Search Aura
                </button>
            </div>
        </section>
    );
}
