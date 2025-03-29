const StatsCard = ({ value, label, icon, increase, width = "w-full" }) => {
    return (
      <div className={`${width} bg-white rounded-lg p-4 border border-gray-100`}>
        <div className="flex justify-between items-start">
          <div className="text-3xl font-bold">{value}</div>
          <div className="text-xl">{icon}</div>
        </div>
        <div className="text-sm text-gray-500 mt-1">{label}</div>
        {increase && <div className="text-xs text-gray-400 mt-2">{increase}</div>}
      </div>
    );
  };
  
  export default StatsCard;