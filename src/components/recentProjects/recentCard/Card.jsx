/* eslint-disable react/prop-types */
const Card = ({ cardItem }) => {
  const { image, title, subtitle } = cardItem;
  return (
    <div
      className="bg-no-repeat relative w-[400px] h-[450px]"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute bottom-12 left-10 transition-transform duration-500 ease-in-out hover:transform hover:-translate-y-[50px]">
        <h2>{title}</h2>
        <h2>{subtitle}</h2>
      </div>
    </div>
  );
};

export default Card;
