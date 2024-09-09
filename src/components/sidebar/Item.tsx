import { Link } from 'react-router-dom';

import iconSidebar1 from '@/assets/images/iconSidebar1.svg';
import iconSidebar2 from '@/assets/images/iconSidebar2.svg';

interface Props {
    title: string;
}

export default function Item({ title }: Props) {
    return (
        <li className="py-2 ps-2 pe-4 grid grid-cols-[42px_1fr_3px] gap-2 hover:bg-[#333] sm-md:grid-cols-[1fr_3px] sm-md:bg-[#666] sm-md:mb-4 sm-md:rounded-lg sm-md:p-2 hover:rounded-lg">
            <span className="h-[42px] rounded-full bg-[#666666] flex justify-center items-center sm-md:hidden">
                <img src={iconSidebar1} alt="icon" />
            </span>
            <Link className="text-lg leading-none text-white font-bold self-center" to="/">
                {title}
            </Link>
            <span className="self-center">
                <img src={iconSidebar2} alt="icon" />
            </span>
        </li>
    );
}
