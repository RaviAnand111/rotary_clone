import ImpactCard from "./ImpactCard";

function ImpactStats() {
  return (
    <div className="w-screen h-[60rem] lg:h-[25rem] px-8 lg:px-40 lg:py-8 bg-[#EEEEEE] flex flex-col lg:flex-row justify-evenly">
      <ImpactCard
        value="1.4"
        title="WE connect people"
        content="1.4 million members worldwide"
        src="/home-icon-earth.png"
        color="#018d8d"
      />
      <ImpactCard
        value="47"
        title="We transform communities"
        content="Approximately 47 million volunteer hours each year"
        src="/home-icon-shovel.png"
        color="#872175"
      />
      <ImpactCard
        value="$333"
        title="We fund sustainable projects"
        content="$333 million awarded for global service initiatives in 2020-21"
        src="/home-icon-vaccine.png"
        color="#dd9400"
      />
    </div>
  );
}

export default ImpactStats;
