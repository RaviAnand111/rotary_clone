import Image from "next/image";
import Link from "next/link";
function Callout() {
  return (
    <div className="h-[64.5rem] w-full bg-white md:-mt-72">
      <div className="w-full h-full bg-white py-24 flex flex-col justify-center lg:flex-row md:mt-72">
        <div className="w-full h-1/2 lg:w-1/2 lg:h-[32rem] bg-[#0c3c7c] py-10 px-5 lg:-translate-y-32">
          <div className="flex justify-center">
            <h1 className="text-[1.5rem] md:text-[1.9rem] font-light font-sans text-white my-5 ">
              Help us create lasting change
            </h1>
          </div>
          <p className="text-[0.9rem] md:text-base font-sans font-light tracking-wider text-white leading-6 my-2">
            Solving some of the world’s most complex and pressing problems takes
            real commitment and vision. Rotary members believe that we share a
            responsibility to take action to improve our communities. Join us,
            so that we can make an even bigger impact – together.
          </p>
          <div className=" w-64 h-16 lg:w-64 lg:h-14 hover:bg-white group rounded-full border-[1px] border-white flex justify-center cursor-pointer mx-auto mt-10 lg:mt-18">
            <Link href="/read-more">
              <a className="text-base tracking-wide font-bold text-white group-hover:text-black mt-5 lg:mt-4 uppercase">
                get involved
              </a>
            </Link>
          </div>
        </div>
        {/* Image */}
        <div className="w-full h-1/3 lg:w-[52rem]">
          <Image
            src="/home-get-involved.jpg"
            width="1200"
            height="801"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Callout;
