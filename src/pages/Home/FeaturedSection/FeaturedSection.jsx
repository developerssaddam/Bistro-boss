import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import "./FeaturedSection.css";
import featuredImg from "../../../assets/home/featured.jpg";

const FeaturedSection = () => {
  return (
    <div className="featured_container py-28 bg-fixed mb-14">
      <div className="max-w-5xl mx-auto featured_item">
        <SectionTitle subtitle={"Check it out"} title={"Featured Food"} />
        <div className="flex gap-10 items-center">
          <div className="flex-1">
            <img className="h-[300px] object-cover" src={featuredImg} alt="" />
          </div>
          <div className="flex-1 text-white">
            <h2 className=" font-semibold">May 20, 2024</h2>
            <h2 className=" font-semibold">WHERE CAN I GET SOME?</h2>
            <p className="font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>

            <button>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
