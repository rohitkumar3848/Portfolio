import styles from "../style";
import LetsConnect from "./LetsConnect";
import Lottie from "react-lottie-player";
import animationData from "../lotties/person-coding.json";
import { aboutMe } from "../constants";
import Resume from "./Resume";


// lottie config
const defaultOptions = {
  loop: true,
  play: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        {/* Hero text */}
        <div className="flex flex-row justify-between items-center w-full text-white">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[80px] leading-[80px]">
            Hi there!
            <br className="sm:block hidden" /> I am
          </h1>

          {/* Show LetsConnect only on larger screens */}
          <div className="ss:flex hidden md:mr-3 mr-0 md:-ml-2">
            <LetsConnect />
          </div>
        </div>

        <div className="flex items-center">
          <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[80px] leading-[80px] w-full">
            <span className="text-gradient">{aboutMe.name}</span>
          </h1>
          <div className="ml-4 hidden ss:block">
            {/* Show Resume only on larger screens */}
            <Resume />
          </div>
        </div>

        <h5 className="font-poppins font-semibold ss:text-[22px] text-[30px] text-white ss:leading-[80px] leading-[80px] w-full">
          <span className="text-gradient">{aboutMe.tagLine}</span>
        </h5>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          {aboutMe.intro}
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <div className="relative z-index-[5] h-[90%] w-[85%]">
          <Lottie {...defaultOptions} />
        </div>
        <div className="absolute z-[1] w-[50%] h-[50%] rounded-full bottom-40 white__gradient"></div>
      </div>

      {/* Mobile-Only Components */}
      <div className={`ss:hidden ${styles.flexCenter} mt-5`}>
        <LetsConnect />
      </div>
      <div className={`ss:hidden ${styles.flexCenter} mt-2`}>
        {/* Mobile version of Resume */}
        <Resume />
      </div>
    </section>
  );
};

export default Hero;
