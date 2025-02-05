//rsc->
import { appleImg, searchImg, bagImg } from "../utils/index";
import { navLists } from "../contants/index";
import "../assets/styles/carusel.css";

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center padding">
      <nav className="flex flex-wrap w-full header-screen ">
        <img
          src={appleImg}
          alt="Apple"
          width={14}
          height={18}
          className="mr-20 "
        />

        <div className="flex flex-1 justify-center max-sm:hidden gap-7">
          {navLists.map((nav) => (
            <div
              key={nav}
              className=" text-sm cursor-pointer text-gray-500 hover:text-white transition-all"
            >
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
