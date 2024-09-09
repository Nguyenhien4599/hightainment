import React from 'react';

import FilterSearch from '@/components/filterSearch';

export default function Index() {
    return (
        <>
            <section className="sm-md:hidden">
                <FilterSearch />
            </section>
        </>
    );
}
