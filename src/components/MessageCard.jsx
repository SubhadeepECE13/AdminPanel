const MessageCard = ({ title, propertyName, content, time, type }) => {
    return (
      <div className="mb-4">
        <div className="flex justify-between items-start mb-1">
          <div className="font-semibold">{title}</div>
          <div className="text-xs text-gray-400">{time}</div>
        </div>
        <div className="text-sm text-gray-500 mb-1">{propertyName}</div>
        <div className="text-sm text-gray-600 mb-3">{content}</div>
        <span
          className={`text-xs px-3 py-1 rounded-full ${
            type === "Feedback" 
              ? "bg-green-100 text-green-600" 
              : "bg-blue-100 text-blue-600"
          }`}
        >
          {type}
        </span>
      </div>
    );
  };
  
  export default MessageCard;