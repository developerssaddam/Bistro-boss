import "./PageBanner.css";
import { Parallax } from "react-parallax";

const PageBanner = ({ img, title, subtitle }) => {
  return (
    <div className="mb-14">
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={`${img}`}
        bgImageAlt="the dog"
        strength={-200}
      >
        <div className="pageBanner_container h-[550px] flex justify-center items-center">
          <div className="pageBanner_content w-3/5 h-1/2 uppercase max-w-5xl mx-auto flex justify-center items-center">
            <div className="text-center font_cinzel">
              <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold mb-2">
                {title}
              </h2>
              <p className="text-xs md:text-sm">{subtitle}</p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default PageBanner;
