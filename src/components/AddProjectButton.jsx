const AddProjectButton = () => {
    return (
      <button className="flex items-center gap-2 bg-gray-100 text-gray-800 px-4 py-2 rounded-full mb-6">
        <span>Add a new project</span>
        <span className="w-6 h-6 bg-[#0F0B2D] rounded-full text-white flex items-center justify-center text-lg">+</span>
      </button>
    );
  };
  
  export default AddProjectButton;