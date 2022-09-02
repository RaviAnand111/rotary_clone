import Image from "next/image";

function ImpactCard({ title, content, value, color, src }) {
  return (
    <div className="w-full lg:w-1/3 h-80 lg:mx-3 flex flex-col justify-center">
      <div className="mx-auto flex mb-5">
        <div className="w-full">
          <p className="text-6xl font-bold" style={{ color: color }}>
            {value}
          </p>
          <p className="text-2xl font-bold" style={{ color: color }}>
            million
          </p>
        </div>
        <div className="w-full h-full">
          <Image src={src} height="65" width="60" />
        </div>
      </div>
      <div className="w-full h-1/2 bg-white flex justify-center text-center ">
        <div className=" flex flex-col justify-center p-5">
          <p className="font-bold uppercase tracking-wider text-[0.865rem] leading-9" style={{ color: color }}>
            {title}
          </p>
          <p className="text-[#39424a]">{content}</p>
        </div>
      </div>
    </div>
  );
}

export default ImpactCard;
