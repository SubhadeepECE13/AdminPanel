import Top from "../images/topimg.png";
const AnalyticsSection = () => {
    return (
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Analytics</h2>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Reviews Over Time Chart */}
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Reviews over time</h3>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs">
                ↑
              </div>
              <div>
                <div className="text-green-600 font-semibold">0.8%</div>
                <div className="text-xs text-gray-400">Than last Day</div>
              </div>
            </div>
            <div className="h-40 flex items-end justify-between">
              {Array(12)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="relative flex flex-col items-center">
                    <div 
                      className="w-1 bg-[#0F0B2D] rounded-full" 
                      style={{ height: `${Math.random() * 100}px` }}
                    ></div>
                    <div className="absolute bottom-0 w-8 h-16 bg-[#E6F7F5] opacity-50 rounded-t-full -z-10"></div>
                    <div className="w-2 h-2 bg-[#0F0B2D] rounded-full -mt-1"></div>
                  </div>
                ))}
            </div>
          </div>
  
          {/* Top Performing Properties */}
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Top performing properties</h3>
  
            {["Chitwan Landmark", "Everest View", "Annapurna Peak"].map((name, i) => (
              <div key={i} className="flex gap-4 mb-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden">
                  <img 
                    src={Top}
                    alt={name} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">{name}</h3>
                    <div className="flex items-center gap-1 bg-amber-100 px-2 py-1 rounded-full">
                      <span className="text-amber-500 font-semibold">{18 - i * 3}</span>
                      <span className="text-amber-500">⭐</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default AnalyticsSection;