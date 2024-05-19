import "./SectionBanner.css";

const SectionBanner = ({ img, title, subtitle }) => {
  return (
    <div className="mb-14">
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="sectionBanner_container h-[450px] bg-fixed flex justify-center items-center"
      >
        <div className="sectionBanner_content w-3/5 h-1/2 max-w-5xl mx-auto flex justify-center items-center">
          <div className="text-center px-2 lg:px-20">
            <h2 className="text-lg md:text-3xl uppercase font_cinzel font-semibold mb-2">
              {title}
            </h2>
            <h4 className="text-sm font-medium">{subtitle}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionBanner;
