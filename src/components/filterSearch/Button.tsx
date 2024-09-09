import clsx from 'clsx';

interface Props {
    classText: string;
    children: string;
    isActive: boolean;
    setActiveDate: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ classText, children, isActive, setActiveDate }: Props) {
    return (
        <button onClick={setActiveDate} className={clsx(classText, isActive && 'bg-[#999]')}>
            {children}
        </button>
    );
}
