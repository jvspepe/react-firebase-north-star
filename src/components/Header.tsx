import { Link } from "react-router-dom";
import ActionUser from "./ActionUser";
import ActionNav from "./ActionNav";
import ActionBag from "./ActionBag";

const routes = [
  {
    path: "/",
    label: "Início",
  },
  {
    path: "/produtos",
    label: "Produtos",
  },
  {
    path: "/sobre",
    label: "Sobre nós",
  },
];

function Header() {
  return (
    <header className="flex h-14 items-center border-b border-neutral-300">
      <nav className="container mx-auto flex w-full items-center justify-between px-6 py-4 md:px-0">
        <Link to="/">North Star</Link>
        <ul className="hidden gap-4 lg:flex">
          {routes.map((route) => (
            <li key={route.label}>
              <Link to={route.path}>{route.label}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <ActionUser />
          <ActionBag />
          <ActionNav routes={routes} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
