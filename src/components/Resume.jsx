import styles from "../style";
import { arrowUp } from "../assets";
import { resumeLink } from "../constants";

const Resume = () => {
    return (
      <div
        className={`${styles.flexCenter} w-[200px] h-[60px] rounded-md bg-blue-gradient p-[2px] cursor-pointer`}
        onClick={() => window.open(resumeLink)}
      >
        <div
          className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-md`}
        >
          <div className={`${styles.flexStart} flex-row items-center`}>
            <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
              <span className="text-gradient">View Resume</span>
            </p>
            <img src={arrowUp} alt="arrowUp" className="w-[23px] h-[23px]" />
          </div>
        </div>
      </div>
    );
  };

export default Resume;
