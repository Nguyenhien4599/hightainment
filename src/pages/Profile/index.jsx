import React from 'react';
import { Link } from 'react-router-dom';

import avatar from '@/assets/images/avatar.jpeg';
import Carousel from '@/components/carousel';
import Item from '@/components/carousel/Item';
import ItemReview from '@/components/carousel/ItemReview';
import { breakPointsCarouselReview, breakPointsCarouselCard } from '@/const/breakpoints';
import { listDataCarouselCard as data } from '@/const/list';

export default function Index() {
    return (
        <>
            <header className="flex items-end gap-6 sm-md:gap-3">
                <div className="w-[200px] h-[200px] sm-md:w-[100px] sm-md:h-[100px] flex justify-center items-center">
                    <img
                        src={avatar}
                        alt="avatar"
                        className="w-[180px] h-[180px] sm-md:w-[80px] sm-md:h-[80px] rounded-full"
                    />
                </div>
                <div>
                    <p className="text-white font-normal text-[56px] sm-md:text-2xl leading-none">Calvin Klein</p>
                    <p className="text-white text-2xl sm-md:text-lg leading-none font-semibold mb-3">
                        avan123@avansoft.co.kr
                    </p>
                    <Link
                        to="/profile/edit"
                        className="text-customColor-primary text-2xl sm-md:text-lg leading-none font-normal"
                    >
                        Manage Account
                    </Link>
                </div>
            </header>

            <section className="mt-[72px] sm-md:pe-6">
                <Carousel title={'My Reviews'} breakPoints={breakPointsCarouselReview} mode="review">
                    {data.map((_, index) => (
                        <ItemReview key={index} showEllipsis />
                    ))}
                </Carousel>
            </section>

            <section className="mt-[65px]">
                <Carousel breakPoints={breakPointsCarouselCard} title={'Favorites'}>
                    {data.map((item, index) => (
                        <Item key={index} title={item.title} img={item.img} />
                    ))}
                </Carousel>
            </section>
            <section className="mt-[65px]">
                <Carousel breakPoints={breakPointsCarouselCard} title={'Watched'}>
                    {data.map((item, index) => (
                        <Item key={index} title={item.title} img={item.img} />
                    ))}
                </Carousel>
            </section>
        </>
    );
}
