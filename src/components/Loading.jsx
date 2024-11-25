import styles from "../style";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <motion.div
      id="loading"
      className="w-screen h-screen flex items-center justify-center"
      initial={{ scale: 1.0, opacity: 0.25 }}
      animate={{
        scale: window.innerWidth > 768 ? 2.2 : 1.2, // Scale less on mobile
        opacity: 0.75,
      }}
      exit={{ opacity: 0, transition: { duration: 0.25 } }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      {/* Wrapper for responsive design */}
      <div className="mt-4 w-[80%] sm:w-[220px] h-[50px] bg-blue-gradient p-[2px] rounded-md flex items-center justify-center">
        <h1 className="font-poppins font-semibold text-[16px] sm:text-[20px] text-white leading-[24px] sm:leading-[30px] w-full h-full bg-primary rounded-md flex items-center justify-center">
          <span className="text-gradient">Rohit Kumar</span>
        </h1>
      </div>
    </motion.div>
  );
};

export default Loading;
