import React from "react";

const ProjectCard = ({image1, image2}) => {
  return (
    <>
      <div className="h-full w-full lg:w-1/2 group hover:rounded-4xl overflow-hidden transition-all relative">
        <img className="w-full h-full object-cover" src={image1} alt="img" />

        <div className="opacity-0 group-hover:opacity-100 transition w-full h-full absolute top-0 left-0 flex items-center justify-center bg-black/20">
          <h2 className="font-[font1] uppercase text-4xl border-2 rounded-full px-8 pt-1">
            VIEW PROJECT
          </h2>
        </div>
      </div>

      <div className="h-full w-full lg:w-1/2 group hover:rounded-4xl overflow-hidden transition-all relative">
        <img className="w-full h-full object-cover" src={image2} alt="img" />

        <div className="opacity-0 group-hover:opacity-100 transition w-full h-full absolute top-0 left-0 flex items-center justify-center bg-black/20">
          <h2 className="font-[font1] uppercase text-4xl border-2 rounded-full px-8 pt-1">
            VIEW PROJECT
          </h2>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
