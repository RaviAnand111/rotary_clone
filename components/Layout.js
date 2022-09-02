import Image from "next/image";
import { useState, useEffect } from "react";

function Layout() {
  const [screenWidth, setScreenWidth] = useState();

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => window.removeEventListener("resize", changeWidth);
  }, []);

  return (
    <div className=" md:-translate-y-52 flex justify-center">
      <div className="h-[95rem] w-screen bg-[#0B2840] flex flex-col justify-center">
        {/* Content */}
        <div className="w-full h-[27rem] py-12 px-10">
          <div className="flex justify-center">
            <h1 className="text-4xl md:text-[1.9rem] text-center font-light font-sans text-white my-5 ">
              No challenge is too big for us
            </h1>
          </div>

          <p className="text-lg md:text-base font-sans font-light tracking-wider text-white leading-7 my-2 text-center">
            For more than a century, we’ve bridged cultures and connected
            continents. We champion peace, fight illiteracy and poverty, help
            people get access to clean water and sanitation, and fight disease.
            Our newest cause is to protect our planet and its resources.
          </p>
        </div>

        {/* home Causes images */}
        {screenWidth < 1000 ? (
          <div className="w-full h-full flex justify-center">
            <div className="grid grid-cols-2 gap-x-12 gap-y-20 px-4 ">
              <div className="w-44 h-44 md:w-52 md:h-52 lg:w-72 lg:h-72">
                <Image
                  src="/home-areas-of-focus.jpg"
                  height="467px"
                  width="467px"
                  layout="intrinsic"
                  className="rounded-full"
                />
                <p className="text-base font-bold text-white flex justify-center text-center">
                  Promoting Peace
                </p>
              </div>
              <div className="w-44 h-44">
                <Image
                  src="/home-areas-of-focus-fighting_Disease.jpg"
                  height="467px"
                  width="467px"
                  layout="intrinsic"
                  className="rounded-full"
                />
                <p className="text-base font-bold text-white flex justify-center text-center">
                  Fighting Disease
                </p>
              </div>
              <div className="w-44 h-44">
                <Image
                  src="/home-areas-of-focus-clean_water.jpg"
                  height="467px"
                  width="467px"
                  layout="intrinsic"
                  className="rounded-full"
                />
                <p className="text-base font-bold text-white flex justify-center text-center">
                  Providing Clean Water
                </p>
              </div>
              <div className="w-44 h-44">
                <Image
                  src="/home-areas-of-focus-mothers_and_children.jpg"
                  height="467px"
                  width="467px"
                  layout="intrinsic"
                  className="rounded-full"
                />
                <p className="text-base font-bold text-white flex justify-center text-center">
                  Saving Mothers &amp; Childrens
                </p>
              </div>
              <div className="w-44 h-44">
                <Image
                  src="/home-areas-of-focus-Education.jpg"
                  height="467px"
                  width="467px"
                  layout="intrinsic"
                  className="rounded-full"
                />
                <p className="text-base font-bold text-white flex justify-center text-center">
                  Supporting Education
                </p>
              </div>
              <div className="w-44 h-44">
                <Image
                  src="/home-areas-of-focus-growing_local_economies.jpg"
                  height="467px"
                  width="467px"
                  layout="intrinsic"
                  className="rounded-full"
                />
                <p className="text-base font-bold text-white flex justify-center text-center">
                  Growing Local Economies
                </p>
              </div>
              <div className="w-44 h-44 ml-28">
                <Image
                  src="/home-areas-of-focus-environment.jpg"
                  height="467px"
                  width="467px"
                  layout="intrinsic"
                  className="rounded-full"
                />
                <p className="text-base font-bold text-white flex justify-center text-center">
                  Supporting the Environment
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center -translate-y-24">
            {/* 1st column */}
            <div className="flex flex-col justify-center">
              <div className="w-44 h-44 md:w-52 md:h-52 lg:w-72 lg:h-72 m-12 hover:scale-110 transform transition ease-linear duration-200">
                <Image
                  src="/home-areas-of-focus.jpg"
                  height="467px"
                  width="467px"
                  layout="intrinsic"
                  className="rounded-full"
                />
                <p className="text-lg font-bold text-white flex justify-center text-center">
                  Promoting Peace
                </p>
              </div>

              <div className="w-44 h-44 md:w-52 md:h-52 lg:w-72 lg:h-72 m-12 hover:scale-110 transform transition ease-linear duration-200">
                <Image
                  src="/home-areas-of-focus-mothers_and_children.jpg"
                  height="467px"
                  width="467px"
                  layout="intrinsic"
                  className="rounded-full"
                />
                <p className="text-lg font-bold text-white flex justify-center text-center">
                  Saving Mothers &amp; Childrens
                </p>
              </div>
            </div>

            {/* 2nd column */}
            <div className="flex flex-col">
              <div className="w-44 h-44 md:w-52 md:h-52 lg:w-72 lg:h-72 m-12 hover:scale-110 transform transition ease-linear duration-200">
                <Image
                  src="/home-areas-of-focus-fighting_Disease.jpg"
                  height="467px"
                  width="467px"
                  layout="intrinsic"
                  className="rounded-full"
                />
                <p className="text-lg font-bold text-white flex justify-center text-center">
                  Fighting Disease
                </p>
              </div>

              <div className="w-44 h-44 md:w-52 md:h-52 lg:w-72 lg:h-72 m-12 hover:scale-110 transform transition ease-linear duration-200">
                <Image
                  src="/home-areas-of-focus-Education.jpg"
                  height="467px"
                  width="467px"
                  layout="intrinsic"
                  className="rounded-full"
                />
                <p className="text-lg font-bold text-white flex justify-center text-center">
                  Supporting Education
                </p>
              </div>

              <div className="w-44 h-44 md:w-52 md:h-52 lg:w-72 lg:h-72 m-12 hover:scale-110 transform transition ease-linear duration-200">
                <Image
                  src="/home-areas-of-focus-environment.jpg"
                  height="467px"
                  width="467px"
                  layout="intrinsic"
                  className="rounded-full"
                />
                <p className="text-lg font-bold text-white flex justify-center text-center">
                  Supporting the Environment
                </p>
              </div>
            </div>

            {/* 3rd column  */}
            <div className="flex flex-col justify-center">
              <div className="w-44 h-44 md:w-52 md:h-52 lg:w-72 lg:h-72 m-12 hover:scale-110 transform transition ease-linear duration-200">
                <Image
                  src="/home-areas-of-focus-clean_water.jpg"
                  height="467px"
                  width="467px"
                  layout="intrinsic"
                  className="rounded-full"
                />
                <p className="text-lg font-bold text-white flex justify-center text-center">
                  Providing Clean Water
                </p>
              </div>

              <div className="w-44 h-44 md:w-52 md:h-52 lg:w-72 lg:h-72 m-12 hover:scale-110 transform transition ease-linear duration-200">
                <Image
                  src="/home-areas-of-focus-growing_local_economies.jpg"
                  height="467px"
                  width="467px"
                  layout="intrinsic"
                  className="rounded-full"
                />
                <p className="text-lg font-bold text-white flex justify-center text-center">
                  Growing Local Economies
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Layout;
