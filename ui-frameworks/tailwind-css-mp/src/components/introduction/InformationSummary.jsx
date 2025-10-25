const InformationSummary = ({ item }) => {
  return (
    <div className={`bg-[#F6EBFE] text-center`}>
      <div className="w-auto h-auto mx-2 sm:mx-4 my-5 xxs:my-5 sm:my-[17px]">
        <p
          className={`text-[16px] xxs:text-[18px] sm:text-[32px] font-semibold text-gray-700`}
        >
          {item.description}
        </p>
        <p
          className={`text-[8px] xxs:text-[9px] sm:text-[16px] font-normal px-[0.90rem] sm:px-[1rem] text-wrap text-gray-500`}
        >
          {item.title}
        </p>
      </div>
    </div>
  );
};

export default InformationSummary;
