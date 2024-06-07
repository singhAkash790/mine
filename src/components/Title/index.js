const Index = ({ children, backgroundColor, textColor }) => {
  // Define dynamic classes based on the props
  const dynamicClasses = `text-[#c4c4c4] 3xl:text-[0.85rem] 2xl:text-[0.7rem] text-[0.65rem] tracking-[3.8px] text-center md:mb-8 mb-4 ${backgroundColor} ${textColor}`;

  return (
    <div
      className={dynamicClasses}
      data-aos-offset="100"
      data-aos-easing="ease-in-sine"
      data-aos-once="true"
      data-aos-duration="600"
      data-aos="fade-in"
    >
      <span className="  font-semibold  uppercase">{children}</span>
    </div>
  );
};

export default Index;
