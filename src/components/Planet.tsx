import { useState, useEffect } from "react";
import data from "../data.json";
import { useParams } from "react-router";

export default function Planet() {
  const params = useParams();
  const planetName = params.planet;
  const planetObj = data.find((el) => el.name === planetName);

  const [content, setContent] = useState(planetObj?.overview.content);

  useEffect(() => {
    // Update content  when planetObj changes
    setContent(planetObj?.overview.content);
  }, [planetObj]);

  ////

  const handleOverviewClick = () => {
    setContent(planetObj?.overview.content);
  };

  const handleStructureClick = () => {
    setContent(planetObj?.structure.content);
  };

  const handleGeologyClick = () => {
    setContent(planetObj?.geology.content);
  };

  // console.log(planetObj?.color);

  return (
    <div>
      <div className="flex justify-around">
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
          <img src="" alt="" /> <img src="" alt="" />
        </div>
        <div className="max-w-[350px]  ">
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
          <div className="flex flex-col gap-4 mt-24">
            <button
              onClick={() => handleOverviewClick()}
              className={`w-80 h-12 border-solid border-[1px] hover:bg-slate-600 border-slate-700 font-bold font-sparta text-white text-left ${
                content === planetObj?.overview.content
                  ? `bg-[${planetObj?.color}]`
                  : ""
              }`}
            >
              <span className="opacity-50 px-6">01</span> OVERVIEW
            </button>
            <button
              onClick={() => handleStructureClick()}
              className={`w-80 h-12 border-solid border-[1px]  hover:bg-slate-600 border-slate-700 font-bold font-sparta text-white text-left ${
                content === planetObj?.structure.content
                  ? `bg-[${planetObj?.color}]`
                  : ""
              }`}
            >
              <span className="opacity-50 px-6">02</span> INTERNAL STRUCTURE
            </button>
            <button
              onClick={() => handleGeologyClick()}
              className={`w-80 h-12 border-solid border-[1px]  hover:bg-slate-600 border-slate-700 font-bold font-sparta text-white text-left ${
                content === planetObj?.geology.content
                  ? `bg-[${planetObj?.color}]`
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
