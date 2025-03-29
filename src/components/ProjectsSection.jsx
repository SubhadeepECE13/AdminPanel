import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <div className="bg-white rounded-lg p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Project list and review opportunities</h2>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">View all</span>
          <span className="w-6 h-6 bg-[#0F0B2D] rounded-full text-white flex items-center justify-center text-xs">
            →
          </span>
        </div>
      </div>

      <ProjectCard 
        name="Project Name" 
        location="Location" 
        image="/placeholder.svg?height=96&width=96" 
        rating={18} 
      />
    </div>
  );
};

export default ProjectsSection;