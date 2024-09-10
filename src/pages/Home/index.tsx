import FilterSearch from '@/components/filterSearch';
import Carousel from '@/components/carousel';

export default function Index() {
    return (
        <>
            <section className="sm-md:hidden">
                <FilterSearch />
            </section>

            <section className="mt-14">
                <Carousel title={'Movie'} />
            </section>
        </>
    );
}
