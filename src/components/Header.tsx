import data from "../data.json";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="w-full h-[5.5rem]  flex justify-between  ">
        <h1 className="text-lg px-8 py-7 text-white font-antonio">
          THE PLANETS
        </h1>
        <div className="flex justify-between items-center gap-8 px-7">
          {data.map((planet, index) => {
            return (
              <li
                className="list-none text-xs color hover:opacity-100 tracking-wider  text-white leading-6 opacity-65  cursor-pointer font-sparta font-bold"
                key={index}
              >
                <Link to={`/${planet.name}`}>{planet.name}</Link>
              </li>
            );
          })}
        </div>
      </nav>
      <div className="w-full h-[1px] opacity-20 bg-white"></div>
    </header>
  );
}
