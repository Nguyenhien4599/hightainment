import FilterSearch from '@/components/filterSearch';
import Carousel from '@/components/carousel';
import Item from '@/components/carousel/Item';
import { listDataCarouselCard as data } from '@/const/list';
import { breakPointsCarouselCard } from '@/const/breakpoints';

export default function Index() {
    return (
        <>
            <section className="sm-md:hidden">
                <FilterSearch />
            </section>

            <section className="mt-14 sm-md:mt-0">
                <Carousel breakPoints={breakPointsCarouselCard} title={'Movie'}>
                    {data.map((item, index) => (
                        <Item key={index} title={item.title} img={item.img} />
                    ))}
                </Carousel>
            </section>

            <section className="mt-14">
                <Carousel breakPoints={breakPointsCarouselCard} title={'TV Show'}>
                    {data.map((item, index) => (
                        <Item key={index} title={item.title} img={item.img} />
                    ))}
                </Carousel>
            </section>
        </>
    );
}
