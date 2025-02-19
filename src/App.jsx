import BestContraction from "./components/bestContractionSection/BestContraction";
import CommitedSection from "./components/commitedSection/CommitedSection";
import Banner from "./components/homePage/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import NumberSpeek from "./components/numberSpeek/NumberSpeek";
import Recent from "./components/recentProjects/Recent";

function App() {
  return (
    <>
      <div className="flex flex-col">
        <Navbar></Navbar>
        <Banner></Banner>
        <CommitedSection></CommitedSection>
        <Recent></Recent>
        <div className="relative">
          <div className="">
            <NumberSpeek></NumberSpeek>
          </div>
          <div className=" absolute top-[400px] left-0 w-full">
            <BestContraction></BestContraction>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
