import BurgerMenu from "./BugerMenu";


export default function Header() {
    return (
        <header className="bg-background h-16 w-full flex justify-between">
            <div className="h-16 w-40">
                <img className="h-full w-full p-2" src="/logo-no-background.png"></img>
            </div>
            <BurgerMenu />
        </header>
    )
}