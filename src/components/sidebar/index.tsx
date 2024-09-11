import { listSidebar } from '@/const/list';
import Item from './Item';

export default function Index() {
    return (
        <>
            <h2 className="pt-[71px] font-bold text-lg leading-none text-customColor-primary py-2">My Auras</h2>
            <div className="h-full overflow-y-auto scrollbar-custom">
                <div className="h-dvh">
                    <nav className="mt-6 pe-3">
                        <ul>
                            {listSidebar.map((text, index) => (
                                <Item title={text} key={index} />
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}
