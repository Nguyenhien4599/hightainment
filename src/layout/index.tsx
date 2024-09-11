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
                <aside className="sm-md:hidden bg-customColor-bgSideBar border-r border-r-[#ffffff1a] row-start-1 row-end-3 px-6">
                    <SideBar />
                </aside>
                <main className="pt-[60px] ps-[72px] sm-md:ps-6 sm-md:pt-9 container">{children}</main>
                <Footer />
            </section>
            <NavigationBottom />
        </>
    );
}
