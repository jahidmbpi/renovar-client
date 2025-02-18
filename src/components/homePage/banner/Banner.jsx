import banner from "../../../assets/home/recent-projects/1.jpg";
import leftTestImg from "../../../assets/home/New folder/corner-left.png";
import rightTextimg from "../../../assets/home/New folder/hero-corner.png";
import bannerLogo from "../../../assets/logo/favicon.png";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="fw-full relative">
      <div
        style={{ backgroundImage: `url(${banner})` }}
        className="bg-cover w-full mx-auto h-[600px]  bg-no-repeat flex flex-col relative bg-red-600 text-center justify-center items-center"
      >
        <div>
          <motion.div
            className="relative z-10"
            initial={{ y: -150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="items-center justify-center mx-auto text-center flex flex-col">
              <img className="w-[150px]" src={bannerLogo} alt="" />
              <p className="custom-word-spacing tracking-[5px] text-2xl text-white">
                The best industrial solutions
              </p>
            </div>
          </motion.div>
        </div>
        {/* ................ */}
        <div>
          <motion.div
            className="relative z-10"
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-7xl font-bold uppercase text-white p-8">
              Dream & Build
            </h2>
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
          <div>
            <motion.div
              className="relative z-10"
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div>
                <button className="w-[200px] h-[65px] bg-white hover:bg-[#ff6620] ">
                  Discover
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
