import { useState, useEffect, SetStateAction } from "react";
import data from "../data.json";
import { useParams } from "react-router";

export default function Planet() {
  const params = useParams();
  const planetName = params.planet;
  const planetObj = data.find((el) => el.name === planetName);

  const [content, setContent] = useState(planetObj?.overview.content);
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    // Update content  when planetObj changes
    setContent(planetObj?.overview.content);
  }, [planetObj]);

  //

  const handleSectionClick = (content: SetStateAction<string | undefined>) => {
    setContent(content);
    // Set the active section based on the clicked button
    // Set the active button based on the clicked section content
    if (content === planetObj?.overview.content) {
      setActiveSection("overview");
    } else if (content === planetObj?.structure.content) {
      setActiveSection("structure");
    } else if (content === planetObj?.geology.content) {
      setActiveSection("geology");
    }
  };

  return (
    <div>
      <div className="lg:flex justify-around">
        <div className="min-w-[700px] flex justify-center items-center ">
          <img
            src={planetObj?.images.planet}
            alt="planet-image"
            className={
              content === planetObj?.overview.content
                ? "pt-44 pb-5 block"
                : "hidden"
            }
          />
          <img
            src={planetObj?.images.internal}
            alt="planet-image"
            className={
              content === planetObj?.structure.content ||
              content === planetObj?.geology.content
                ? "pt-44 pb-5 block relative"
                : "hidden"
            }
          />
          <img
            src={planetObj?.images.geology}
            alt="planet-image"
            className={
              content === planetObj?.geology.content
                ? "pt-44 pb-5 block absolute w-[160px] top-[450px]"
                : "hidden"
            }
          />
        </div>
        <div className="lg:max-w-[350px] md:flex lg:flex-col">
          <div className="">
            <p className="text-white pt-24 text-[80px] font-antonio">
              {planetObj?.name}
            </p>
            <p className="text-white text-sm font-sparta pt-6 opacity-75 min-h-36">
              {content}
            </p>
            <p className="text-white flex font-sparta opacity-75 gap-3 pt-4">
              <span className="font-extralight">Source: </span>
              <a
                href={planetObj?.overview.source}
                className="flex justify-center items-center gap-1 underline"
              >
                Wikipedia{" "}
                <img
                  src="src/images/icon-source.svg"
                  alt="icon-source"
                  className="size-4"
                />{" "}
              </a>
            </p>
          </div>
          <div className="flex flex-col gap-4 mt-24">
            <button
              onClick={() => handleSectionClick(planetObj?.overview.content)}
              className={`w-72 lg:w-80 h-12 border-solid border-[1px] hover:bg-slate-600 border-slate-700 font-bold font-sparta text-white text-left ${
                content === planetObj?.overview.content
                  ? `${planetObj?.color}`
                  : ""
              }`}
            >
              <span className="opacity-50 px-6">01</span> OVERVIEW
            </button>
            <button
              onClick={() => handleSectionClick(planetObj?.structure.content)}
              className={`w-72 lg:w-80 h-12 border-solid border-[1px]  hover:bg-slate-600 border-slate-700 font-bold font-sparta text-white text-left ${
                content === planetObj?.structure.content
                  ? `${planetObj?.color}`
                  : ""
              }`}
            >
              <span className="opacity-50 px-6">02</span> INTERNAL STRUCTURE
            </button>
            <button
              onClick={() => handleSectionClick(planetObj?.geology.content)}
              className={`w-72 lg:w-80 h-12 border-solid border-[1px]  hover:bg-slate-600 border-slate-700 font-bold font-sparta text-white text-left ${
                content === planetObj?.geology.content
                  ? `${planetObj?.color}`
                  : ""
              }`}
            >
              <span className="opacity-50 px-6">03</span> SURFACE GEOLOGY
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-7 text-white justify-center items-center pt-32 pb-14">
        <div className="w-64 h-32 border-solid border-[1px] border-slate-700  pt-5 pl-6 ">
          <p className="font-bold font-sparta opacity-50 tracking-widest leading-6 text-xs">
            ROTATION TIME
          </p>
          <p className="text-4xl font-antonio tracking-tighter">
            {planetObj?.rotation}
          </p>
        </div>
        <div className="w-64 h-32 border-solid border-[1px] border-slate-700 pt-5 pl-6">
          <p className="font-bold font-sparta opacity-50 tracking-widest leading-6 text-xs">
            REVOLUTION TIME
          </p>
          <p className="text-4xl font-antonio tracking-tighter">
            {planetObj?.revolution}
          </p>
        </div>
        <div className="w-64 h-32 border-solid border-[1px] border-slate-700 pt-5 pl-6">
          <p className="font-bold font-sparta opacity-50 tracking-widest leading-6 text-xs">
            RADIUS
          </p>
          <p className="text-4xl font-antonio tracking-tighter">
            {planetObj?.radius}
          </p>
        </div>
        <div className="w-64 h-32 border-solid border-[1px] border-slate-700 pt-6 pl-6">
          <p className="font-bold font-sparta opacity-50 tracking-widest leading-6 text-xs">
            AVERAGE TEMP.
          </p>
          <p className="text-4xl font-antonio tracking-tighter">
            {planetObj?.temperature}
          </p>
        </div>
      </div>
    </div>
  );
}
