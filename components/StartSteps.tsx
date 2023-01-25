import styles from "../src/styles";

interface startStepsProps {
  number: number;
  text: string;
}

const StartSteps: React.FC<startStepsProps> = ({ number, text }) => {
  return (
    <div className={`${styles.flexCenter} flex-row`}>
      <div
        className={`${styles.flexCenter} h-[70px] w-[70px] rounded-[24px] bg-[#323f5d]`}
      >
        <p className="text-[20px] font-bold text-white">0{number}</p>
      </div>
      <p className="ml-[30px] flex-1 text-[18px] font-normal text-[#B0B0B0]">
        {text}
      </p>
    </div>
  );
};

export default StartSteps;
