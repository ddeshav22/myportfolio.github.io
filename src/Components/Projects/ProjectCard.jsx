import React from 'react'

const ProjectCard = ({ title, main,image, link }) => {
  return (
    <div className="p-6 flex flex-row bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          className="w-3/4 max-w-md object-cover rounded-lg mr-4"
          src={image}
          alt=""
        />
      </a>
      <div className="flex-grow px-4 py-2">
        <h3 className="text-xl md:text-2xl font-bold leading-normal mb-2 project-title">
          {" "}
          {/* Added class for title */}
          {title}
        </h3>
        <div className="project-content">
          {" "}
          {/* New class for content */}
          <p className="text-sm md:text-md leading-normal mb-2">
            {/* Project description starts here */}
            Developed a {/* Consistent start for all descriptions */}
            {main.split(".")[0]}. {/* Extract first sentence */}
          </p>
          <p className="text-sm md:text-md">
            {main.slice(main.split(".")[0].length + 1)}
          </p>{" "}
          {/* Rest of the description */}
          <div className="mt-2 flex gap-2 md:gap-4">
            {/* Button or link for demo/source code can be added here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard