import { listSidebar } from '@/const/list';
import Item from './Item';

export default function Index() {
    return (
        <div className="pt-[71px] px-6 pb-9 h-[958px]">
            <h2 className="font-bold text-lg leading-none text-customColor-primary py-2">My Auras</h2>
            <nav className="mt-6 h-[464px] overflow-y-scroll pe-3 scrollbar-custom">
                <ul>
                    {listSidebar.map((text, index) => (
                        <Item title={text} key={index} />
                    ))}
                </ul>
            </nav>
        </div>
    );
}
