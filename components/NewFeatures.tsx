import styles from "../src/styles";

interface newFeaturesProp {
  imgUrl: string;
  title: string;
  subtitle: string;
}

const NewFeatures: React.FC<newFeaturesProp> = ({
  imgUrl,
  title,
  subtitle,
}) => {
  return (
    <div className="min-w-[210px] flex-1 flex-col sm:max-w-[250px]">
      <div
        className={`${styles.flexCenter} h-[70px] w-[70px] rounded-[24px] bg-[#323f5d]`}
      >
        <img src={imgUrl} alt="icon" className="h-1/2 w-1/2 object-contain" />
      </div>
      <h1 className="mt-[26px] text-[24px] font-bold leading-[30px] text-white">
        {title}
      </h1>
      <p className="mt-[16px] flex-1 text-[18px] font-normal leading-[32px] text-[#b0b0b0]">
        {subtitle}
      </p>
    </div>
  );
};

export default NewFeatures;
