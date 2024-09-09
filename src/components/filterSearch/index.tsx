import clsx from 'clsx';
import { DayPicker } from 'react-day-picker';
import React from 'react';
import moment from 'moment';

import FilterSearchSelectItem from './FilterSearchSelectItem';
import Button from './Button';
import { listBtnFilterDate, listBtnFilterMovie, listFilter } from '@/const/list';
import styles from './styles.module.css';

export default function Index() {
    const refEl = React.useRef<HTMLDivElement | null>(null);
    const optionsRef = React.useRef<HTMLDivElement | null>(null);
    const dayPickerStartRef = React.useRef<HTMLDivElement>(null);
    const dayPickerEndRef = React.useRef<HTMLDivElement>(null);
    const [openOptions, setOpenOptions] = React.useState(false);
    const [startDate, setStartDate] = React.useState<string | Date | undefined>(undefined);
    const [endDate, setEndDate] = React.useState<string | Date | undefined>(undefined);
    const [isOpen, setIsOpen] = React.useState<string | null>(null);
    const [isActiveDate, setActiveDate] = React.useState<number | null>(null);
    const [isActiveMovie, setActiveMovie] = React.useState<number | null>(null);

    React.useEffect(() => {
        const handleCloseMenu = (e: MouseEvent) => {
            const target = e.target as Node;
            if (!optionsRef.current?.contains(target) && !refEl.current?.contains(target) && openOptions) {
                setOpenOptions(false);
                setIsOpen(null);
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
        if (refEl.current) refEl.current.previousElementSibling?.classList.add('border-r-0');
    };

    const handleDayClick = (day: Date) => {
        setIsOpen(null);
    };

    const handleInputDatePickerClick = (type: string) => () => {
        setIsOpen(type);
    };

    const handleSelectDate = (type: string) => (val: Date | undefined) => {
        if (type === 'start') setStartDate(moment(val).format('YYYY-MM-DD'));
        else setEndDate(moment(val).format('YYYY-MM-DD'));
        setIsOpen(null);
    };

    const handleBlurDatepickerStart = (e: React.FocusEvent<HTMLDivElement>) => {
        if (dayPickerStartRef.current && !dayPickerStartRef.current.contains(e.relatedTarget)) setIsOpen(null);
    };

    const handleBlurDatepickerEnd = (e: React.FocusEvent<HTMLDivElement>) => {
        if (dayPickerEndRef.current && !dayPickerEndRef.current.contains(e.relatedTarget)) setIsOpen(null);
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
                        className="w-full absolute top-full p-6 bg-[#333] border border-customColor-primary"
                    >
                        <section>
                            <h2 className="text-white text-2xl leading-5 font-bold mb-6">Date</h2>
                            <div className="grid grid-cols-[1fr_1fr_1fr] grid-rows-[46px_46px] gap-x-[14px] gap-y-[17px] mb-6">
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
                            <div className="grid grid-cols-[1fr_12px_1fr] gap-x-3">
                                <div ref={dayPickerStartRef} onBlur={handleBlurDatepickerStart}>
                                    <input
                                        type="text"
                                        value={startDate ? startDate.toString() : ''}
                                        readOnly
                                        onClick={handleInputDatePickerClick('start')}
                                        placeholder="Start date"
                                        className={clsx(
                                            'w-full h-full rounded-lg bg-[#222] border border-[#434343] px-4 py-3 outline-none text-white text-base font-bold',
                                            styles['custom-datepicker'],
                                        )}
                                    />
                                    {isOpen === 'start' && (
                                        <div className="absolute bg-[#222] text-white p-2 rounded-lg">
                                            <DayPicker
                                                mode="single"
                                                selected={startDate as Date}
                                                onSelect={handleSelectDate('start')}
                                                onDayClick={handleDayClick}
                                                modifiersClassNames={{
                                                    selected: 'bg-customColor-primary text-white rounded-full',
                                                    today: 'text-customColor-primary',
                                                }}
                                            />
                                        </div>
                                    )}
                                </div>

                                <span className="text-xl font-normal text-[#BBB] leading-none tracking-[-0.5px] self-center">
                                    ~
                                </span>

                                <div ref={dayPickerEndRef} onBlur={handleBlurDatepickerEnd}>
                                    <input
                                        type="text"
                                        readOnly
                                        value={endDate ? endDate.toString() : ''}
                                        onClick={handleInputDatePickerClick('end')}
                                        placeholder="End date"
                                        className={clsx(
                                            'w-full h-full rounded-lg bg-[#222] border border-[#434343] px-4 py-3 outline-none text-white text-base font-bold',
                                            styles['custom-datepicker'],
                                        )}
                                    />
                                    {isOpen === 'end' && (
                                        <div className="absolute bg-[#222] text-white p-2 rounded-lg">
                                            <DayPicker
                                                mode="single"
                                                selected={endDate as Date}
                                                onSelect={handleSelectDate('end')}
                                                onDayClick={handleDayClick}
                                                modifiersClassNames={{
                                                    selected: 'bg-customColor-primary text-white rounded-full',
                                                    today: 'text-customColor-primary',
                                                }}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </section>
                        <section className="mt-6">
                            <h2 className="text-white font-bold text-2xl leading-5 ">Movie / TV Show</h2>
                            <div className="mt-6 grid grid-cols-[1fr_1fr] gap-x-[14px]">
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
            <div>
                <button className="h-full w-[176px] bg-[#666] text-customColor-primary border border-customColor-primary cursor-pointer text-xl font-bold rounded-lg">
                    Save Aura
                </button>
            </div>
        </section>
    );
}
