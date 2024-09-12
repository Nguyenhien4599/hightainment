import React from 'react';

import { listSidebar } from '@/const/list';
import Item from './Item';

export default function Index() {
    const [isOpen, setIsOpen] = React.useState<number | null>(null);
    return (
        <>
            <h2 className="mt-[71px] font-bold text-lg leading-none text-customColor-primary py-2">My Auras</h2>
            <nav className="h-full overflow-y-auto scrollbar-custom">
                <ul className="mt-6 pe-3 h-dvh">
                    {listSidebar.map((text, index) => (
                        <Item
                            title={text}
                            key={index}
                            isOpenDropdown={isOpen === index}
                            setIsOpen={() => setIsOpen(index)}
                        />
                    ))}
                </ul>
            </nav>
        </>
    );
}
