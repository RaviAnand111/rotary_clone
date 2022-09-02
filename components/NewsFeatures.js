import Link from "next/link";
import Image from "next/image";
function NewsFeatures() {
  return (
    <div className="w-screen h-[70rem] md:h-[50rem] pb-16 pt-10 lg:px-24 bg-white flex flex-col">
      <div className="mx-auto my-5 pb-6">
        <p className="text-4xl font-sans font-light text-[#39424a]">
          News &amp; Features
        </p>
      </div>
      {/* Images Canvas */}

      <div className="w-full flex flex-col justify-evenly lg:flex-row lg:w-full">
        <div className="w-full h-70 lg:w-[70rem] lg:h-[36rem] group relative lg:-translate-y-5">
          <div className="w-full h-full brightness-75 overflow-hidden">
            <Image
              src="/rm-aug22-pos-hero.jpg"
              height="852px"
              width="1200px"
              layout="responsive"
              className="group-hover:scale-110 transform transition ease-linear duration-1000"
            />
          </div>
          <div className="w-full h-full absolute top-0 flex flex-col justify-end py-12 px-10">
            <p className="text-xl font-sans font-light text-white my-3 cursor-pointer">
              Recognizing a woman’s worth
            </p>
            <Link href="/somewhere">
              <a className="text-sm font-bold text-white">Read More</a>
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row lg:flex-col lg:w-1/3 lg:-translate-x-3 pb-42 md:pb-2">
          <div className="w-full h-72 lg:w-[25rem] xl:w-[30rem] group relative">
            <div className="w-full h-full brightness-75 overflow-hidden">
              <Image
                src="/rm-aug22-projects-kazakhstan.jpg"
                height="810px"
                width="1080px"
                layout="responsive"
                className="group-hover:scale-110 transform transition ease-linear duration-1000"
              />
            </div>
            <div className="w-full h-full absolute top-0 flex flex-col justify-end py-12 px-10">
              <p className="text-xl font-sans font-light text-white my-3 cursor-pointer">
                Rotary Projects Around the Globe
              </p>
              <Link href="/somewhere">
                <a className="text-sm font-bold text-white">Read More</a>
              </Link>
            </div>
          </div>

          <div className="w-full h-72 lg:w-[25rem] xl:w-[30rem] group relative">
            <div className="w-full h-full brightness-75 overflow-hidden">
              <Image
                src="/rm-jun22-photo-contest-winner.jpg"
                height="810px"
                width="1080px"
                layout="responsive"
                className="group-hover:scale-110 transform transition ease-linear duration-1000"
              />
            </div>
            <div className="w-full h-full absolute top-0 flex flex-col justify-end py-12 px-10">
              <p className="text-xl font-sans font-light text-white my-3 cursor-pointer">
                The universal language of photography: Rotary Magazine's
                Photography Awards 2022
              </p>
              <Link href="/somewhere">
                <a className="text-sm font-bold text-white">Read More</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsFeatures;
