import { component$, useSignal } from '@builder.io/qwik';
import { Link, useLocation } from '@builder.io/qwik-city';
import { Logo } from '../icons/logo';
import CustomRouter from '../custom-router';

type LinkType = {
    href: string;
    title: string;
    customClass: string;
}

export default component$(() => {
    const location = useLocation();
    const defaultStyles: string =
        "gap-8 flex scale-100 transition-all hover:scale-125 focus:scale-125";
    const scaleStyles = useSignal(defaultStyles);

    const getClassForPath = (path: string): string => {
        return `${scaleStyles} ${location.url.href === path ? "!font-bold" : ""}`;
    };

    const links: Array<LinkType> = [
        { href: "/home", title: "Home", customClass: getClassForPath("/home") },
        { href: "/about", title: "About", customClass: getClassForPath("/about") },
        { href: "/", title: "Exit", customClass: "btn btn-contrast" }
    ];

    return (
        <header class="bg-brand w-full border border-black">
            <div class={`nav flex flex-col md:flex-row gap-6 w-full justify-between items-center p-5 md:px-20 mx-auto max-w-[1400px] `}>
                {/*|====== simpson-logo-image link ======|*/}
                <Link href="/home">
                    <Logo classCustom="w-48 h-auto" />
                </Link>
                {/*|====== page-link list ======|*/}
                <ul class="flex gap-8">
                    {links.map((link: LinkType) => (
                        <CustomRouter
                            key={link.href}
                            customClass={link.customClass}
                            customHRef={link.href}
                            routeTitle={link.title}
                        />
                    ))}
                </ul>
            </div>
        </header>
    );
});