import CommitedSection from "./components/commitedSection/CommitedSection";
import Banner from "./components/homePage/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Recent from "./components/recentProjects/Recent";
// import Subnav from "./components/navbar/subnav/Subnav";

function App() {
  return (
    <>
      <div className="flex flex-col">
        <Navbar></Navbar>
        <Banner></Banner>
        <CommitedSection></CommitedSection>
        <Recent></Recent>
      </div>
    </>
  );
}

export default App;
