import React from 'react';

import avatar from '@/assets/images/avatar.jpeg';
import icon from '@/assets/images/icon6.svg';
import icon1 from '@/assets/images/icon7.svg';
import iconLike from '@/assets/images/like.svg';
import iconStart from '@/assets/images/start.svg';

export default function ItemReview() {
    const [isHover, setIsHover] = React.useState(false);

    const handleHover = () => {
        setIsHover(!isHover);
    };

    return (
        <div
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            className="group px-[25px] py-4 bg-[#222]  rounded-lg hover:bg-[#EEE] duration-300 transition-all"
        >
            <div className="grid grid-cols-[34px_1fr_1fr] gap-3 mb-[9px]">
                <div>
                    <img src={avatar} alt="img" className="w-full h-[34px] rounded-full" />
                </div>
                <p className="text-2xl leading-none text-[#999] font-semibold self-center duration-300 transition-all group-hover:text-[#000]">
                    ABRAHAM
                </p>
                <span className="justify-self-end">
                    <img src={isHover ? icon : icon1} alt="icon" />
                </span>
            </div>
            <p className=" font-semibold text-xl leading-none show-ellipsis text-[#666] duration-300 transition-all group-hover:text-customColor-bgSideBar">
                Rocketman: A Vibrant Celebration of Elton John's Life and Music
            </p>
            <span className="text-sm leading-none font-normal text-[#666] duration-300 transition-all group-hover:text-customColor-bgSideBar">
                November 18, 2024
            </span>
            <p className="mt-[19px] text-sm leading-none font-normal mb-1 line-clamp-3 text-[#999] duration-300 transition-all group-hover:text-customColor-bgSideBar">
                Rocketman is a truly spectacular cinematic journey that beautifully captures the essence of Elton John's
                extraordinary life and iconic music. This film masterfully balances emotional depth and vibrant
                performances, with Taron Egerton delivering a standout portrayal of Elton John, embodying his spirit and
                complexity with remarkable authenticity and charisma. The musical numbers are breathtaking, seamlessly
                integrated into the narrative, and each one is a visual and auditory delight that elevates the
                storytelling to new heights. Rocketman transcends the traditional biopic format, offering not just a
                recounting of events but an immersive, uplifting celebration of resilience, creativity, and the
                transformative power of music. It delves into the highs and lows of Elton John's career and personal
                life, presenting a raw and unfiltered look at his struggles and triumphs. The film's direction,
                choreography, and cinematography come together to create a vivid and engaging portrayal that resonates
                with audiences on multiple levels. From the stunning opening scenes to the heartfelt conclusion,
                Rocketman is a testament to the enduring legacy of one of music's greatest icons. It's a film that
                invites viewers to not only witness but also feel the impact of Elton John's journey, making it a
                memorable and inspiring experience that celebrates the indomitable human spirit and the magical world of
                music.
            </p>
            <span className="text-customColor-primary text-sm leading-none font-Anton">more</span>
            <div className="mt-[19px] flex gap-4">
                <div className="flex items-center gap-1">
                    <img src={iconLike} alt="icon" />
                    <span className="text-customColor-primary text-base leading-none font-medium">3964</span>
                </div>
                <div className="flex items-center gap-1">
                    <img src={iconStart} alt="icon" className="w-5 h-5" />
                    <span className="text-customColor-primary text-base leading-none font-medium">5.0</span>
                </div>
            </div>
        </div>
    );
}
