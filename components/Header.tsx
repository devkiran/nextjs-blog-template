import Link from "next/link";
import menus from "data/menus";

const NavItems = () => {
  return (
    <ul className="flex items-center space-x-5">
      {menus.map((menu) => (
        <li
          className="cursor-pointer text-base font-medium hover:text-sky-400"
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
    <header className="flex h-16 w-full flex-wrap items-center justify-between border-b-2 border-green-400 px-40">
      <a>
        <img src="/vercel.svg" alt="logo" className="h-8" />
      </a>
      <NavItems />
    </header>
  );
};

export default Header;
