import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import i1 from '@/assets/images/c1.png';
import i2 from '@/assets/images/c2.jpeg';
import i3 from '@/assets/images/c3.jpeg';
import i4 from '@/assets/images/c4.jpeg';
import i5 from '@/assets/images/c5.jpeg';
import i6 from '@/assets/images/c6.svg';
import i7 from '@/assets/images/c7.svg';
import Item from './Item';

interface Props {
    title: string;
}

const data = [
    {
        title: 'ROCKETMAN',
        img: i1,
    },
    {
        title: 'MOVIE TITLE',
        img: i2,
    },
    {
        title: 'MOVIE TITLE',
        img: i3,
    },
    {
        title: 'MOVIE TITLE',
        img: i4,
    },
    {
        title: 'MOVIE TITLE',
        img: i5,
    },
];

export default function Index({ title }: Props) {
    return (
        <>
            <h2 className="text-white text-[42px] font-bold mb-9">{title}</h2>
            <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={4.5}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper: any) => console.log(swiper)}
                pagination={{ clickable: true }} // Hiển thị điều hướng pagination
                navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev',
                }}
            >
                {data.map((c, i) => (
                    <SwiperSlide key={i}>
                        <Item title={c.title} img={c.img} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <button className="custom-prev w-[42px] h-[42px] rounded-full flex justify-center items-center bg-[#666] border-none outline-none">
                <img src={i6} alt="img" />
            </button>
            <button className="custom-next w-[42px] h-[42px] rounded-full flex justify-center items-center bg-[#666] border-none outline-none">
                <img src={i7} alt="img" />
            </button>
        </>
    );
}
