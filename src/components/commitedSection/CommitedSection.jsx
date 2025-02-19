import imageborder from "../../assets/home/Newfolder/about.jpg";
import homicon1 from "../../assets/icons/home-icon-1.jpg";
import homeicon2 from "../../assets/icons/home-icon-2.jpg";
const CommitedSection = () => {
  return (
    <div className="md:my-16">
      <div className="flex justify-between items-center md:mx-[120px] md:mb-16">
        <div className="flex md:flex-1">
          <img src={imageborder} alt="" />
        </div>
        <div className="md:flex-1 flex flex-col  space-y-7">
          <h2 className="border-l-2 border-[#ff651e]">Get to know us</h2>
          <h2 className="text-4xl font-bold uppercase">
            Committed to only High Quality Service
          </h2>
          <div className="flex justify-between border-y-2 border-[#a8a2a0]/30 py-6">
            <div className="flex space-x-4 justify-between items-center">
              <img src={homicon1} alt="" />
              <p className="text-2xl   font-bold uppercase ">
                Building quality standards
              </p>
            </div>
            <div className="flex space-x-4 justify-between items-center">
              <img src={homeicon2} alt="" />
              <p className="text-2xl font-bold uppercase ">
                Design &. Build Package
              </p>
            </div>
          </div>
          <p className="text-[#a8a2a0]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly
            believable. Lorem Ipsum is simply dummy text of the printing and
            typesetting.
          </p>
        </div>
      </div>
      <div className="bg-[#f2f3f6] h-[200px] flex items-center justify-between px-[150px]">
        <h2 className=" text-3xl font-bold uppercase ">
          We offer the highest quality Trades
        </h2>
        <button className="w-[200px] h-[65px] bg-white hover:bg-[#ff6620] ">
          get in tuch
        </button>
      </div>
    </div>
  );
};

export default CommitedSection;
