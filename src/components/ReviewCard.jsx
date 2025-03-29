const ReviewCard = ({ reviewer, initials, propertyName, rating, content, time }) => {
    return (
      <div className="mb-4">
        <div className="flex gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-purple-200 flex items-center justify-center text-purple-800 font-semibold">
            {initials}
          </div>
          <div>
            <div className="font-semibold">{reviewer}</div>
            <div className="flex">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <span key={i} className={i < rating ? "text-amber-400" : "text-gray-300"}>
                    ★
                  </span>
                ))}
            </div>
          </div>
        </div>
        <div className="text-sm text-gray-500 mb-1">{propertyName}</div>
        <div className="text-sm text-gray-600 mb-1">{content}</div>
        <div className="text-xs text-gray-400">{time}</div>
      </div>
    );
  };
  
  export default ReviewCard;