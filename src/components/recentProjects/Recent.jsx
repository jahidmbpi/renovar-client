import { useEffect, useState } from "react";
import Header from "./recentHeader/Header";
import Card from "./recentCard/Card";

const Recent = () => {
  const [data, setData] = useState(); // changed Setdata to setData
  console.log(data);
  useEffect(() => {
    fetch("card.json")
      .then((res) => res.json())
      .then((result) => {
        console.log("data fetch successfully");
        setData(result); // changed Setdata to setData
      });
  }, []);

  return (
    <div className="bg-[#2a2f42]">
      <Header />
      <div className="md:mx-[140px] mt-[50px]">
        <div className="grid grid-cols-3 gap-5 items-center justify-center w-full ">
          {data?.map((cardItem) => (
            <Card key={cardItem.id} cardItem={cardItem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recent;
