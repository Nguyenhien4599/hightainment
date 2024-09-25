import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import clsx from 'clsx';

import styles from './styles.module.css';

interface BreakpointConfig {
    slidesPerView: number;
    spaceBetween: number;
}

interface Props {
    title: string;
    children: React.ReactNode;
    titlePrimaryColor?: boolean;
    mode?: string;
    breakPoints?: { [breakpoint: number]: BreakpointConfig };
    useFont?: boolean;
}

export default function Index({ title, titlePrimaryColor, breakPoints, mode, children, useFont }: Props) {
    return (
        <>
            <div
                className={clsx(
                    'mb-9 grid grid-cols-[1fr_auto_auto] gap-8 sm-md:gap-3 sm-md:mb-6',
                    styles['header-carousel'],
                )}
            >
                <span
                    className={clsx(
                        'text-[42px] sm-md:text-2xl font-bold leading-none',
                        titlePrimaryColor ? 'text-customColor-primary' : 'text-white',
                        useFont && 'font-Anton',
                    )}
                >
                    {title}
                </span>
                <button
                    className={clsx(
                        ' w-[42px] h-[42px] sm-md:w-6 sm-md:h-6 rounded-full flex justify-center items-center bg-[#999] border-none outline-none cursor-pointer',
                        `custom-prev-${title.replaceAll(' ', '')}`,
                    )}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none">
                        <path
                            d="M9.39749 16.1025C9.45276 16.154 9.49709 16.2161 9.52783 16.2851C9.55857 16.3541 9.5751 16.4286 9.57644 16.5041C9.57777 16.5796 9.56388 16.6547 9.53559 16.7247C9.50729 16.7947 9.46519 16.8584 9.41177 16.9118C9.35836 16.9652 9.29473 17.0073 9.22469 17.0356C9.15465 17.0639 9.07963 17.0778 9.0041 17.0765C8.92857 17.0751 8.85409 17.0586 8.78509 17.0278C8.71609 16.9971 8.65399 16.9528 8.60249 16.8975L1.10249 9.39751C0.997156 9.29204 0.937988 9.14907 0.937988 9.00001C0.937988 8.85094 0.997156 8.70798 1.10249 8.60251L8.60249 1.10251C8.70912 1.00315 8.85016 0.949055 8.99588 0.951626C9.14161 0.954197 9.28065 1.01323 9.38371 1.11629C9.48677 1.21935 9.5458 1.35839 9.54837 1.50411C9.55095 1.64984 9.49685 1.79088 9.39749 1.89751L2.29593 9.00001L9.39749 16.1025Z"
                            fill="white"
                        />
                    </svg>
                </button>
                <button
                    className={clsx(
                        'me-36 sm-md:me-5 w-[42px] h-[42px] sm-md:w-6 sm-md:h-6 rounded-full flex justify-center items-center bg-[#999] border-none outline-none cursor-pointer',
                        `custom-next-${title.replaceAll(' ', '')}`,
                    )}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M8.60251 19.1025C8.54724 19.154 8.50291 19.2161 8.47217 19.2851C8.44143 19.3541 8.4249 19.4286 8.42356 19.5041C8.42223 19.5796 8.43612 19.6547 8.46441 19.7247C8.49271 19.7947 8.53481 19.8584 8.58823 19.9118C8.64164 19.9652 8.70527 20.0073 8.77531 20.0356C8.84535 20.0639 8.92037 20.0778 8.9959 20.0765C9.07143 20.0751 9.14591 20.0586 9.21491 20.0278C9.28391 19.9971 9.34601 19.9528 9.39751 19.8975L16.8975 12.3975C17.0028 12.292 17.062 12.1491 17.062 12C17.062 11.8509 17.0028 11.708 16.8975 11.6025L9.39751 4.10251C9.29088 4.00315 9.14984 3.94905 9.00412 3.95163C8.85839 3.9542 8.71935 4.01323 8.61629 4.11629C8.51323 4.21935 8.4542 4.35839 8.45163 4.50411C8.44905 4.64984 8.50315 4.79088 8.60251 4.89751L15.7041 12L8.60251 19.1025Z"
                            fill="white"
                        />
                    </svg>
                </button>
            </div>
            <Swiper
                modules={[Navigation]}
                className="overflow-y-clip overflow-x-visible"
                navigation={{
                    nextEl: `.custom-next-${title.replaceAll(' ', '')}`,
                    prevEl: `.custom-prev-${title.replaceAll(' ', '')}`,
                }}
                breakpoints={breakPoints}
            >
                {React.Children.map(children, (child) => (
                    <SwiperSlide
                        className={clsx(mode !== 'review' ? 'h-auto sm-md:!w-[127px] md-lg:!w-[205px]' : 'w-auto')}
                    >
                        {child}
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
