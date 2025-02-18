import banner from "../../../assets/home/recent-projects/1.jpg";
import leftTestImg from "../../../assets/home/New folder/corner-left.png";
import rightTextimg from "../../../assets/home/New folder/hero-corner.png";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="fixed w-full">
      <div
        style={{ backgroundImage: `url(${banner})` }}
        className="bg-cover w-full mx-auto h-[600px]  bg-no-repeat flex flex-col relative bg-red-600 text-center justify-center items-center"
      >
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="custom-word-spacing tracking-[5px]">
            The best industrial solutions
          </p>
        </motion.div>
        {/* ................ */}
        <motion.div
          className="relative"
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-7xl font-bold uppercase  p-8">Dream & Build</h2>
          <img
            className="w-[50px] absolute bottom-0 right-0"
            src={leftTestImg}
            alt="Left Image"
          />
          <img
            className="w-[50px] absolute top-0 left-0"
            src={rightTextimg}
            alt="Right Image"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
