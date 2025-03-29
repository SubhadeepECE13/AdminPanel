import ReviewCard from "./ReviewCard";

const ReviewsSection = () => {
  return (
    <div className="bg-white rounded-lg p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Your latest reviews</h2>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">View all</span>
          <span className="w-6 h-6 bg-[#0F0B2D] rounded-full text-white flex items-center justify-center text-xs">
            →
          </span>
        </div>
      </div>

      <ReviewCard
        reviewer="Lorem Ipsum"
        initials="SB"
        propertyName="Property name reviewed"
        rating={5}
        content="Lorem ipsum dolor sit amet consectetur. Pharetr tristique sit quisque adipiscing sagittis feugiat lacus aliquet. Urna commodo nunc eget lectus mi pellentesque pharetra nulla vitae pede. Laoreet diam vulputate lorem mauris hendrerit nunc nec egestas. Egestas volutpat adipiscing sed condimentum ipsum."
        time="6 hours ago"
      />
    </div>
  );
};

export default ReviewsSection;