import React from 'react';

import img from '@/assets/images/c1.png';
import watchIcon from '@/assets/images/watchIcon.svg';
import favoriteIcon from '@/assets/images/favoriteIcon.svg';
import shareIcon from '@/assets/images/shareIcon.svg';
import startIcon from '@/assets/images/start.svg';
import netflixLogon from '@/assets/images/netflixLogo.svg';
import huluLogo from '@/assets/images/c11.png';
import primeLogo from '@/assets/images/c12.png';
import banner from '@/assets/images/c13.png';
import ItemVideo from '@/components/carousel/ItemVideo';
import Carousel from '@/components/carousel';
import { breakPointsCarouselVideos, breakPointsCarouselReview } from '@/const/breakpoints';
import { listDataCarouselVideo } from '@/const/list';
import ItemReview from '@/components/carousel/ItemReview';

export default function Index() {
    return (
        <>
            <section className="grid grid-cols-[333px_1fr] grid-rows-[538px] gap-x-9 relative">
                <div className="absolute top-[-60px] left-[-72px] right-[-72px] z-0">
                    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>
                    <img src={banner} alt="anh" />
                </div>
                <img src={img} alt="movie" className="rounded-[20px] h-full w-full cursor-pointer relative z-10" />
                <div className="self-end pb-9 relative z-10">
                    <ul className="flex gap-6 mb-6">
                        <li className="py-2 px-[18px] border border-[#EAEAEA] rounded-[52px] flex justify-between items-center gap-4">
                            <img src={watchIcon} alt="icon" />
                            <span className="text-[#EAEAEA] text-2xl leading-none font-normal">Watched</span>
                        </li>
                        <li className="py-2 px-[18px] border border-[#EAEAEA] rounded-[52px] flex justify-between items-center gap-4">
                            <img src={favoriteIcon} alt="icon" />
                            <span className="text-[#EAEAEA] text-2xl leading-none font-normal">Favorite</span>
                        </li>
                        <li className="py-2 px-[18px] border border-[#EAEAEA] rounded-[52px] flex justify-between items-center gap-4">
                            <img src={shareIcon} alt="icon" />
                            <span className="text-[#EAEAEA] text-2xl leading-none font-normal">Share</span>
                        </li>
                    </ul>
                    <div className="flex items-center gap-[3px]">
                        <img src={startIcon} alt="icon" className="w-9 h-9" />
                        <span className="text-customColor-primary text-[32px] font-medium">5.0</span>
                    </div>
                    <p className="text-white text-[56px] font-normal font-Anton leading-normal">ROCKETMAN</p>
                    <span className="text-white text-2xl leading-none font-semibold">2019.05.31</span>
                    <div className="mt-6 flex gap-8">
                        <span className="w-12 h-12 px-1  rounded-full bg-white flex justify-center items-center">
                            <img src={netflixLogon} alt="logo" />
                        </span>
                        <span className="w-12 h-12 px-1 rounded-full bg-white flex justify-center items-center">
                            <img src={huluLogo} alt="logo" />
                        </span>
                        <span className="w-12 h-12 px-1 rounded-full bg-white flex justify-center items-center">
                            <img src={primeLogo} alt="logo" />
                        </span>
                    </div>
                    <ul className="mt-6 flex gap-4">
                        <li className="text-[#EAEAEA] text-[15px] font-normal px-3 py-1 bg-[#222] rounded-[52px]">
                            Action
                        </li>
                        <li className="text-[#EAEAEA] text-[15px] font-normal px-3 py-1 bg-[#222] rounded-[52px]">
                            Comedy
                        </li>
                        <li className="text-[#EAEAEA] text-[15px] font-normal px-3 py-1 bg-[#222] rounded-[52px]">
                            Drama
                        </li>
                    </ul>
                    <ul className="mt-6 flex flex-wrap gap-4">
                        <li className="flex gap-2">
                            <span className="text-[#EAEAEA] text-[15px] font-normal"># Happy</span>
                            <span className="text-white text-base leading-none font-semibold">5.0</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-[#EAEAEA] text-[15px] font-normal"># Interested</span>
                            <span className="text-white text-base leading-none font-semibold">5.0</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-[#EAEAEA] text-[15px] font-normal"># Surprised</span>
                            <span className="text-white text-base leading-none font-semibold">5.0</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-[#EAEAEA] text-[15px] font-normal"># Sad</span>
                            <span className="text-white text-base leading-none font-semibold">5.0</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-[#EAEAEA] text-[15px] font-normal"># Disgusted</span>
                            <span className="text-white text-base leading-none font-semibold">5.0</span>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="mt-[72px]">
                <Carousel breakPoints={breakPointsCarouselVideos} title={'Videos'} mode={'review'} useFont>
                    {listDataCarouselVideo.map((item, index) => (
                        <ItemVideo key={index} title={item.title} urlImg={item.img} date={item.date} />
                    ))}
                </Carousel>
            </section>

            <section className="mt-[100px]">
                <h3 className="text-white font-Anton text-[32px] font-normal leading-none">Wirte Criticism</h3>
                <div className="mt-9 mb-8">
                    <p className="text-[#EAEAEA] text-2xl leading-none font-normal mb-2">ROCKETMAN</p>
                    <span className="text-[#EAEAEA] text-xl leading-none font-normal">MY Rating</span>
                    <div className="my-[35px] px-[100px]">
                        <div className="py-6 rounded-lg  border-2 border-[#555] flex justify-center items-center gap-14">
                            <img src={startIcon} alt="icon" className="w-[72px] h-[72px]" />
                            <img src={startIcon} alt="icon" className="w-[72px] h-[72px]" />
                            <img src={startIcon} alt="icon" className="w-[72px] h-[72px]" />
                            <img src={startIcon} alt="icon" className="w-[72px] h-[72px]" />
                            <img src={startIcon} alt="icon" className="w-[72px] h-[72px]" />
                        </div>
                    </div>
                    <span className="text-[#EAEAEA] text-xl leading-none font-normal">MY Criticism</span>
                    <div className="my-[35px] px-[100px]">
                        <div className="p-2 rounded-lg  border-2 border-[#555] flex justify-center items-center gap-14">
                            <p className="text-[#999] text-sm leading-none font-normal line-clamp-6">
                                Rocketman is a truly spectacular cinematic journey that beautifully captures the essence
                                of Elton John's extraordinary life and iconic music. This film masterfully balances
                                emotional depth and vibrant performances, with Taron Egerton delivering a standout
                                portrayal of Elton John, embodying his spirit and complexity with remarkable
                                authenticity and charisma. The musical numbers are breathtaking, seamlessly integrated
                                into the narrative, and each one is a visual and auditory delight that elevates the
                                storytelling to new heights. Rocketman transcends the traditional biopic format,
                                offering not just a recounting of events but an immersive, uplifting celebration of
                                resilience, creativity, and the transformative power of music. It delves into the highs
                                and lows of Elton John's career and personal life, presenting a raw and unfiltered look
                                at his struggles and triumphs. The film's direction, choreography, and cinematography
                                come together to create a vivid and engaging portrayal that resonates with audiences on
                                multiple levels. From the stunning opening scenes to the heartfelt conclusion, Rocketman
                                is a testament to the enduring legacy of one of music's greatest icons. It's a film that
                                invites viewers to not only witness but also feel the impact of Elton John's journey,
                                making it a memorable and inspiring experience that celebrates the indomitable human
                                spirit and the magical world of music.
                            </p>
                        </div>
                    </div>
                </div>
                <button className="text-white mx-auto font-Anton font-normal text-2xl leading-none w-[138px] bg-customColor-primary flex justify-center items-center rounded-[52px] py-2">
                    POST
                </button>
            </section>

            <section className="mt-[100px]">
                <Carousel
                    title={'Best Reviews'}
                    breakPoints={breakPointsCarouselReview}
                    mode="review"
                    titlePrimaryColor
                >
                    {listDataCarouselVideo.map((_, index) => (
                        <ItemReview key={index} useFont />
                    ))}
                </Carousel>
            </section>

            <section className="mt-[100px]">
                <Carousel title={'Reviews'} breakPoints={breakPointsCarouselReview} mode="review">
                    {listDataCarouselVideo.map((_, index) => (
                        <ItemReview key={index} useFont />
                    ))}
                </Carousel>
            </section>
        </>
    );
}
