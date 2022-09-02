import { useState, useEffect } from "react";
import { Spin as Hamburger, Spin } from "hamburger-react";
import { AiOutlineSearch } from "react-icons/ai";
import { HiX } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const [screenWidth, setScreenWidth] = useState();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  // const [textColor, setTextColor] = useState()

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => window.removeEventListener("resize", changeWidth);
  }, []);

  return (
    <div className="w-screen h-16 bg-white font-open-sans relative z-10">
      {/* Show Navbar according to screenwidth  small size(< 1000) and large size( > 1000) */}

      {screenWidth < 1000 ? (
        // small size navbar

        <div className="flex justify-between">
          {/* Menu Hamburger Icon  */}

          <div className="w-fit border-r pr-1 border-gray-200">
            <Spin
              size={24}
              color={toggleMenu ? "#000000" : "#0197C1"}
              onToggle={() => {
                setToggleMenu(!toggleMenu);
              }}
            />
            <p className=" w-fit text-primary-blue text-xs mx-2 -mt-2">Menu</p>
          </div>

          {/* If toggleMenu is true then show menu */}

          {toggleMenu && (
            // small size hamburer menu

            <div className="w-full h-full bg-white absolute top-16 flex justify-center transition ease-linear duration-300">
              <div className="flex flex-col">
                <div className="flex font-semibold text-lg w-screen h-12 justify-evenly mb-4">
                  <div className=" w-1/2 border border-gray-300 flex justify-center bg-gray-100 text-primary-blue hover:text-white hover:bg-primary-blue transition-all duration-300 ease-linear">
                    <p className="my-auto">JOIN</p>
                  </div>
                  <div className=" w-1/2 border border-gray-300 flex justify-center  text-white bg-primary-blue hover:text-primary-blue hover:bg-white transition-all duration-300 ease-linear">
                    <p className="my-auto">DONATE</p>
                  </div>
                </div>
                <ul className="text-gray-500 font-bold text-lg text-center bg-white">
                  <li className="my-6 hover:text-primary-blue cursor-pointer">
                    About Rotary
                  </li>
                  <li className="my-6 hover:text-primary-blue cursor-pointer">
                    Get Involved
                  </li>
                  <li className="my-6 hover:text-primary-blue cursor-pointer">
                    Our Causes
                  </li>
                  <li className="my-6 hover:text-primary-blue cursor-pointer">
                    Our Programs
                  </li>
                  <li className="my-6 hover:text-primary-blue cursor-pointer">
                    News & Features
                  </li>
                  <li className="my-6 hover:text-primary-blue cursor-pointer">
                    For Members
                  </li>
                  <hr className="w-64 mx-auto" />
                  <li className="my-6 text-sm text-primary-blue hover:underline cursor-pointer">
                    MY ROTARY
                  </li>
                  <li className="my-6 text-sm text-primary-blue hover:underline cursor-pointer">
                    CLUB FINDER
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Rotrary Logo */}
          <Image
            src="/rotary_logo.svg"
            height="50"
            width="110"
            className="cursor-pointer"
          />

          {/* Show Search Toggle Icon if toggleSearch is true otherwise show Cross icon  */}

          <div
            className="w-14 h-16 border-l border-gray-200 flex flex-col justify-center cursor-pointer"
            onClick={() => {
              setToggleSearch(!toggleSearch);
            }}
          >
            {toggleSearch ? (
              <HiX size="28" className="text-black mx-auto" />
            ) : (
              <AiOutlineSearch
                size="28"
                className="text-primary-blue mx-auto"
              />
            )}
            <p className=" w-fit text-primary-blue text-xs mx-auto">Search</p>
          </div>

          {/* show search input if toggleSearch is true  */}

          {toggleSearch && (
            <div className="w-screen h-16 bg-gray-100 text-black absolute top-16 flex justify-center">
              <input
                type="text"
                name="search"
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
                className="w-96 h-11 bg-white my-auto outline-none border-primary-blue border-[1.5px] p-3 text-xl text-gray-600 font-thin"
              />
            </div>
          )}
        </div>
      ) : (
        // Navbar for large screen sizes > 1000px

        <div className="flex flex-col">
          <div className="flex justify-between bg-white h-16 px-10">
            {/* Rotrary Logo  */}
            <Image
              src="/rotary_logo.svg"
              height="50"
              width="110"
              className="cursor-pointer"
            />

            {/* Right side part of Navbar  */}
            <div className="flex flex-col justify-center">
              <div className="flex h-fit">
                {/* My rotary, club finder and search icon  */}
                <span className="w-fit pr-4 mx-2 mt-2 border-gray-300 border-r h-fit text-sm font-bold text-primary-blue hover:underline cursor-pointer">
                  <a>MY ROTARY</a>
                </span>

                <span className="w-fit pr-4 mx-2 mt-2 border-gray-300 border-r h-fit text-sm font-bold text-primary-blue hover:underline cursor-pointer">
                  <a>CLUB FINDER</a>
                </span>

                {/* If toggleSearch is true show search bar otherwise show search icon  */}

                {toggleSearch ? (
                  <div className="w-52 h-8 bg-white top-16 -mt-16 flex justify-center relative">
                    <input
                      type="text"
                      name="search"
                      value={searchValue}
                      onChange={(e) => {
                        setSearchValue(e.target.value);
                      }}
                      className="w-52 h-8 bg-white my-auto outline-none border-primary-blue border-[1.5px] p-2 text-base text-gray-600 font-thin"
                    />
                    <AiOutlineSearch
                      size="25"
                      className=" absolute top-0 right-0 text-primary-blue mt-1 mr-1 cursor-pointer"
                    />
                  </div>
                ) : (
                  <div className="flex cursor-pointer">
                    <AiOutlineSearch
                      size="22"
                      className="mt-2 text-primary-blue"
                    />
                    <p
                      className="text-sm mt-2 ml-1 text-primary-blue font-bold "
                      onClick={() => {
                        setToggleSearch(!toggleSearch);
                      }}
                    >
                      Search
                    </p>
                  </div>
                )}

                {/* Join and Donate buttons */}

                <div className="inline-block h-8 w-32 border-[1.5px] mx-2 bg-white text-primary-blue border-primary-blue font-['Open-Sans'] rounded-3xl flex justify-center font-bold hover:bg-primary-blue hover:text-white cursor-pointer">
                  <Link href="/rotar/org">
                    <a className="mt-[3px]">JOIN</a>
                  </Link>
                </div>
                <div className="inline-block h-8 w-32 border-[1.5px] mx-2 bg-primary-blue text-white border-primary-blue rounded-3xl flex justify-center font-bold hover:bg-white hover:text-primary-blue cursor-pointer">
                  <Link href="/rotary/org">
                    <a className="mt-[3px]">DONATE</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Dropdown on hover part  */}

          <div className="group">
            {/* Dropdown Navbar part  */}

            <div className="h-12 px-12 py-4 p text-[14px] text-gray-500 bg-white flex justify-between group-hover:shadow-xl cursor-pointer">
              <Link href="/rotary">
                <a className="hover:text-primary-blue">About Rotary</a>
              </Link>
              <Link href="/rotary">
                <a className="hover:text-primary-blue">Get Involved</a>
              </Link>
              <Link href="/rotary">
                <a className="hover:text-primary-blue">Our Causes</a>
              </Link>
              <Link href="/rotary">
                <a className="hover:text-primary-blue">Our Programs</a>
              </Link>
              <Link href="/rotary">
                <a className="hover:text-primary-blue">News & Features</a>
              </Link>
              <Link href="/rotary">
                <a className="hover:text-primary-blue">For Members</a>
              </Link>
            </div>

            {/* The Dropdown Part  */}

            <div className="invisible group-hover:visible">
              <div className="h-0 w-full px-12 bg-white group-hover:h-[25rem] delay-300 first-letter:transition-[height] ease-out duration-500 shadow-xl flex justify-between">
                <div className="h-[25rem] mr-6 text-[13.5px] text-gray-500 opacity-0 transition-opacity group-hover:delay-500 ease-in duration-200 group-hover:opacity-100 flex flex-col justify-evenly">
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">About Rotary</a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">History</a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">Our Structure</a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">Our Foundation</a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">Our Leaders</a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">
                      Diversity, Equity and Inclusion
                    </a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">Financials</a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">Partners</a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">Membership</a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">Careers</a>
                  </Link>
                </div>

                <div className="h-[25rem] mr-4 text-[13.5px] text-gray-500 opacity-0 transition-opacity group-hover:delay-500 ease-in duration-200 group-hover:opacity-100 flex flex-col justify-evenly">
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">About Rotary</a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">History</a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">Our Structure</a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">Our Foundation</a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">Our Leaders</a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">
                      Diversity, Equity and Inclusion
                    </a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">Financials</a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">Partners</a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">Membership</a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">Careers</a>
                  </Link>
                </div>

                <div className="h-[25rem] mr-6 text-[13.5px] text-gray-500 opacity-0 transition-opacity group-hover:delay-500 ease-in duration-200 group-hover:opacity-100 flex flex-col justify-evenly">
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">About Rotary</a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">History</a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">Our Structure</a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">Our Foundation</a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">Our Leaders</a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">
                      Diversity, Equity and Inclusion
                    </a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">Financials</a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">Partners</a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">Membership</a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">Careers</a>
                  </Link>
                </div>

                <div className="h-[25rem] mr-6 text-[13.5px] text-gray-500 opacity-0 transition-opacity group-hover:delay-500 ease-in duration-200 group-hover:opacity-100 flex flex-col justify-evenly">
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">About Rotary</a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">History</a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">Our Structure</a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">Our Foundation</a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">Our Leaders</a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">
                      Diversity, Equity and Inclusion
                    </a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">Financials</a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">Partners</a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">Membership</a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">Careers</a>
                  </Link>
                </div>

                <div className="h-[25rem] mr-28 text-[13.5px] text-gray-500 opacity-0 transition-opacity group-hover:delay-500 ease-in duration-200 group-hover:opacity-100 flex flex-col justify-evenly">
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">About Rotary</a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">History</a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">Our Structure</a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">Our Foundation</a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">Our Leaders</a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">
                      Diversity, Equity and Inclusion
                    </a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">Financials</a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">Partners</a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">Membership</a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">Careers</a>
                  </Link>
                </div>

                <div className="h-[25rem] text-[13.5px] text-gray-500 opacity-0 transition-opacity group-hover:delay-500 ease-in duration-200 group-hover:opacity-100 flex flex-col justify-evenly">
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">About Rotary</a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">History</a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">Our Structure</a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">Our Foundation</a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">Our Leaders</a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">
                      Diversity, Equity and Inclusion
                    </a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">Financials</a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">Partners</a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">Membership</a>
                  </Link>
                  <Link href="/rotary" className="my-2">
                    <a className="hover:text-primary-blue">Careers</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
