import icon1 from "../../assets/icons/counter-icon-1.png";
import icon2 from "../../assets/icons/counter-icon-2.png";
import icon3 from "../../assets/icons/counter-icon-3.png";
import CountUp from "react-countup";
// import icon4 from "../../assets/icons/home-icon-1.jpg";
// import icon5 from "../../assets/icons/home-icon-2.jpg";
const NumberSpeek = () => {
  return (
    <div className="bg-[#f2f3f6] h-[500px] w-full relative items-center justify-center ">
      <div className="flex justify-between items-center py-20 ml-32">
        <div className="bg-[#ff6620] h-[250px] w-[250px] items-center  justify-center flex flex-col">
          <h2 className="text-2xl font-bold uppercase text-white">
            number speeak
          </h2>
          <h2 className="text-xl font-bold uppercase text-white">
            for everything
          </h2>
        </div>

        <div className="space-y-5">
          <img src={icon1} alt="" />
          <CountUp start={0} end={2600} delay={0}>
            {({ countUpRef }) => (
              <div>
                <span className="text-5xl font-bold" ref={countUpRef} />
              </div>
            )}
          </CountUp>
          <h2 className="uppercase border-l-2 border-orange-400 p-2">
            Projects Completed
          </h2>
        </div>
        <div className="space-y-5">
          <img src={icon2} alt="" />
          <CountUp start={0} end={8406} delay={0}>
            {({ countUpRef }) => (
              <div>
                <span className="text-5xl font-bold" ref={countUpRef} />
              </div>
            )}
          </CountUp>
          <h2 className="uppercase border-l-2 border-orange-400 p-2">
            Working Hours
          </h2>
        </div>
        <div className="space-y-5">
          <img src={icon3} alt="" />
          <CountUp start={0} end={5500} delay={0}>
            {({ countUpRef }) => (
              <div>
                <span className="text-5xl font-bold" ref={countUpRef} />
              </div>
            )}
          </CountUp>
          <h2 className="uppercase border-l-2 p-2 border-orange-400">
            Happy Clients
          </h2>
        </div>
      </div>
    </div>
  );
};

export default NumberSpeek;
