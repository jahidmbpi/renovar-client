import ac from "../../assets/home/Newfolder/ac.jpg";
import { motion } from "framer-motion";

const BestContraction = () => {
  return (
    <div className="w-full flex relative justify-between">
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0, ease: "easeOut" }}
        className="w-full"
      >
        <div
          className="h-[600px] w-1/2 bg-no-repeat bg-cover bg-center ml-32"
          style={{ backgroundImage: `url(${ac})` }}
        ></div>
      </motion.div>

      <motion.div
        className="flex flex-col p-12 z-20 w-[60%] absolute text-black bg-[#ffffff] h-[500px] bottom-0 right-0 shadow-lg"
        initial={{ x: 800, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0, ease: "easeOut" }}
      >
        <div className="space-y-8">
          <h2 className="uppercase border-l-4 border-orange-600 pl-4">
            Why Choose Us
          </h2>
          <h2 className="text-4xl font-bold uppercase">
            The best construction <br /> company
          </h2>
          <p className="text-[#a8a2a0]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly
            believable.
          </p>
          <button className="w-[200px] h-[65px] bg-[#8a4024] hover:bg-[#ff6620] text-white">
            Learn More
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default BestContraction;
