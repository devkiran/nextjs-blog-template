import { MenuIcon } from "@heroicons/react/solid";
import NavItems from "./NavItems";

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
