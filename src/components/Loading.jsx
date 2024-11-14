import styles from "../style";
import { motion } from "framer-motion";
import { parthmittal } from "../assets";
import { aboutMe } from "../constants";

const Loading = () => {
  return (
    <motion.div
      id="loading"
      className={`w-[100vw] h-[100vh] flex "${styles.flexCenter}`}
      initial={{ scale: 1.0, opacity: 0.25 }}
      animate={{ scale: 2.2, opacity: 0.75 }}
      exit={{ opacity: 0, transition: { duration: 0.25 } }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <div className="mt-4 w-[220px] h-[60px] bg-blue-gradient p-[2px] rounded-md flex items-center justify-center">
        <h1 className="font-poppins font-semibold text-[20px] text-white leading-[30px] w-full h-full bg-primary rounded-md flex items-center justify-center">
          <span className="text-gradient">Rohit Kumar</span>
        </h1>
      </div>

    </motion.div>
  );
};

export default Loading;
