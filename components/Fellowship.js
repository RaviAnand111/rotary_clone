import Image from "next/image";
import Link from "next/link";

function Fellowship() {
  return (
    // shadow-[inset_0_0_1000px_1000px_#f7a81b] opacity-10
    <div className="w-screen h-fit xl:h-[45rem] overflow-y-hidden relative">
      <div className="brightness-75">
        <Image src="/rotary-ukraine.jpg" width="2000px" height="1080px" />
      </div>
      <div className="w-full h-full absolute top-0 md:mt-14 flex flex-col justify-center">
        <div className="px-8 w-full lg:w-1/2 mx-auto">
          <p className="text-3xl md:text-5xl lg:text-7xl lg:text-center font-light font-sans text-[#f7a81b]">
            Rotary Fellowships amplify Ukrainian relief efforts
          </p>
        </div>
        <div className=" w-52 h-10 lg:w-64 lg:h-14 hover:bg-white group rounded-3xl border-[1px] border-white flex justify-center cursor-pointer mx-auto mt-4 lg:mt-18">
          <Link href="/read-more">
            <a className="text-[0.9rem] tracking-wide font-bold text-white group-hover:text-black mt-2 lg:mt-4">READ MORE</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Fellowship;
