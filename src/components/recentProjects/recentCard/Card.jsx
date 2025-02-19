import { FaPlusCircle } from "react-icons/fa";

/* eslint-disable react/prop-types */
const Card = ({ cardItem }) => {
  const { image, title, subtitle } = cardItem;
  return (
    <div
      className="bg-no-repeat relative w-[400px] h-[450px] group"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute bottom-8 left-10  transition-transform duration-500 transform group-hover:-translate-y-[50px] ease-in-out">
        <h2 className="text-white uppercase font-bold">{subtitle}</h2>
        <h2 className="text-2xl text-white uppercase font-bold">{title}</h2>
        <div className="w-[45px] h-[45px]">
          <FaPlusCircle className="text-red-500 h-full w-full invisible group-hover:visible" />
        </div>
      </div>
    </div>
  );
};

export default Card;
