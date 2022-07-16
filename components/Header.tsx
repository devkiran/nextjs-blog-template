import Link from "next/link";
import menus from "../data/menus";

const NavItems = () => {
  return (
    <ul className="flex items-center space-x-5">
      {menus.map((menu) => (
        <li
          className="text-sm font-medium cursor-pointer hover:text-sky-400"
          key={menu.href}
        >
          <Link href={menu.href}>
            <a>{menu.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

const Header = () => {
  return (
    <header className="flex w-full h-16 items-center flex-wrap justify-between border-b-2 px-40 border-green-400">
      <a>
        <img src="/vercel.svg" alt="logo" className="h-8" />
      </a>
      <NavItems />
    </header>
  );
};

export default Header;
