import { Image } from "next/image";
import { useState } from "react";
const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="w-5/6 mx-auto flex justify-between py-10 items-center mb-14 md:mb-0">
      <div>{!showMenu && <img src="/images/logo-bookmark.svg" alt="" />}</div>
      <ul className="uppercase list-none md:flex w-2/5 justify-between items-center hidden">
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#pricing">prices</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
        <li className="bg-softRed rounded-md text-white px-8 py-2 shadow">
          login
        </li>
      </ul>
      {!showMenu && (
        <img
          src={"/images/icon-hamburger.svg"}
          className="w-8 h-auto cursor-pointer md:hidden"
          alt=""
          onClick={() => {
            setShowMenu(true);
          }}
        />
      )}
      {/* mobile menu */}
      {showMenu && (
        <div className="h-screen w-full z-10 bg-veryDarkBlue flex flex-col justify-between opacity-90 absolute top-0 left-0 p-10">
          <div>
            <div className="flex justify-between">
              <img src="/images/white-bookmark.svg" alt="" />
              <img
                className="cursor-pointer"
                src="/images/icon-close.svg"
                alt=""
                onClick={() => {
                  setShowMenu(false);
                }}
              />
            </div>
            <ul className="uppercase list-none text-white text-center mt-10 tracking-widest">
              <li className="py-5 border-y-2 border-grayishBlue">Features</li>
              <li className="py-5 border-b-2 border-grayishBlue">prices</li>
              <li className="py-5 border-b-2 border-grayishBlue">contact</li>
              <li className="py-5">
                <button className="tracking-widest border-2 border-white py-3 rounded w-full font-bold">
                  LOGIN
                </button>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <img src="/images/icon-facebook.svg" className="mr-4" alt="" />
            <img src="/images/icon-twitter.svg" alt="" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
