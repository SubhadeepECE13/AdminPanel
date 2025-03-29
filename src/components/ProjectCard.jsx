const ProjectCard = ({ name, location, image, rating }) => {
    return (
      <div className="flex gap-4 mb-4">
        <div className="w-24 h-24 rounded-lg overflow-hidden">
          <img 
            src={image || "/placeholder.svg"} 
            alt={name} 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">{name}</h3>
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <span>📍</span>
                <span>{location}</span>
              </div>
            </div>
            {rating && (
              <div className="flex items-center gap-1 bg-amber-100 px-2 py-1 rounded-full">
                <span className="text-amber-500 font-semibold">{rating}</span>
                <span className="text-amber-500">⭐</span>
              </div>
            )}
          </div>
          <button className="mt-2 bg-[#0F0B2D] text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2">
            Get reviews
            <span className="w-5 h-5 bg-white rounded-full text-[#0F0B2D] flex items-center justify-center text-xs font-bold">
              +
            </span>
          </button>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;