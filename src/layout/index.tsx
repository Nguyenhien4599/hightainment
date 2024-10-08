import React from 'react';

import Header from '@/components/header';
import Footer from '@/components/footer';
import SideBar from '@/components/sidebar';
import NavigationBottom from '@/components/navigationBottom';

interface Props {
    children: React.ReactNode;
}

export default function Index({ children }: Props) {
    return (
        <>
            <Header />
            <section className="grid grid-cols-[384px_1fr] sm-md:grid-cols-[1fr]">
                <aside className="sm-md:hidden md-lg:hidden bg-customColor-bgSideBar border-r border-r-[#ffffff1a] row-start-1 row-end-3 px-6 grid grid-rows-[max-content_minmax(0,_1fr)] pb-9">
                    <SideBar />
                </aside>
                <main className="pt-[60px] px-[72px] sm-md:pe-0 sm-md:ps-6 sm-md:pt-9 overflow-hidden sm-md:overflow-hidden">
                    {children}
                </main>
                <Footer />
            </section>
            <NavigationBottom />
        </>
    );
}
