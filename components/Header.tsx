import Link from "next/link";
import menus from "data/menus";
import { MenuIcon } from "@heroicons/react/solid";

const NavItems = () => {
  return (
    <nav>
      <ul className="flex items-center space-x-5">
        {menus.map((menu) => (
          <li
            className="cursor-pointer text-base font-medium hover:text-sky-400"
            key={menu.href}
          >
            <Link href={menu.href}>
              <a className="btn btn-outline btn-sm">{menu.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Header = () => {
  return (
    <div className="flex w-full items-center justify-between border-b py-5 px-5">
      <h1 className="text-2xl font-extrabold text-gray-900">Kiran K</h1>
      <div className="flex flex-row md:hidden">
        <MenuIcon className="h-5 w-5" />
      </div>
      <NavItems />
    </div>
  );
};

export default Header;
