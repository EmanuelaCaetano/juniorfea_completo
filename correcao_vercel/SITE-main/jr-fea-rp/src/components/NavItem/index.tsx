import Link from "next/link";

export interface NavItemInterface {
    url: string;
    label: string;
    isActive?: boolean;
}


export default function NavItem(props: NavItemInterface) {
    return(
        <li className="text-[16px] text-white flex mr-4 items-center justify-end list-none active:text-corPrimaria active:scale-110 hover:scale-110 hover:text-corPrimaria transition duration-200 ease-in-out">
            <Link href={props.url} className={`nav-link ${props.isActive ? 'active' : '' }`}>
                {props.label}
            </Link>
    </li>
    )
}


