import Link from "next/link";
import BurgerMenu from "./BugerMenu";


export default function Header() {
    return (
        <header className="bg-background h-16 w-full flex justify-between fixed top-0">
            <Link href={"/"} className="h-16 w-40">
                <img className="h-full w-full p-2" src="/logo-no-background.png"></img>
            </Link>
            <BurgerMenu />
        </header>
    )
}