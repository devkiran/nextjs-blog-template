import type { Menu } from "types";
import Link from "next/link";
import menus from "data/menus";
import { useRouter } from "next/router";

const Nav = () => {
  return (
    <nav>
      <ul className="flex items-center space-x-5">
        {menus.map((menu) => (
          <li
            className="cursor-pointer text-base font-medium hover:text-sky-400"
            key={menu.path}
          >
            <NavItem menu={menu} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

const NavItem = ({ menu }: { menu: Menu }) => {
  const router = useRouter();

  const { asPath } = router;

  return (
    <Link href={menu.path}>
      <a
        className={`btn-sm ${asPath === menu.path ? "btn" : "btn btn-outline"}`}
      >
        {menu.title}
      </a>
    </Link>
  );
};

export default Nav;
