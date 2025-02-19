import BestContraction from "./components/bestContractionSection/BestContraction";
import CommitedSection from "./components/commitedSection/CommitedSection";
import Banner from "./components/homePage/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Recent from "./components/recentProjects/Recent";

function App() {
  return (
    <>
      <div className="flex flex-col">
        <Navbar></Navbar>
        <Banner></Banner>
        <CommitedSection></CommitedSection>
        <Recent></Recent>
        <BestContraction></BestContraction>
      </div>
    </>
  );
}

export default App;
