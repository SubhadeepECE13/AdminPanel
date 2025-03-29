import MessageCard from "./MessageCard";

const MessagesSection = () => {
  return (
    <div className="bg-white rounded-lg p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">New messages received</h2>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">View all</span>
          <span className="w-6 h-6 bg-[#0F0B2D] rounded-full text-white flex items-center justify-center text-xs">
            →
          </span>
        </div>
      </div>

      <MessageCard
        title="Lorem Ipsum"
        propertyName="Property name"
        content="Lorem ipsum dolor sit amet consectetur. Sed diam nibh placerat nisi ut facilisis pharetra erat. Commodo tincidunt congue nunc malesuada pulvinar sagittis condimentum. Volutpat pulvinar velit augue viverra etiam consectetur erat semper. Urna vitae ac fringilla suspendisse turpis scelerisque amet mi tempor."
        time="6 hours ago"
        type="Feedback"
      />

      <MessageCard
        title="Lorem Ipsum"
        propertyName="Property name"
        content="Lorem ipsum dolor sit amet consectetur. Sed vel ultrices massa donec nunc tristique. Sit dui cras sagittis malesuada lectus cras porttitor fusce nisl etiam vitae tincidunt faucibus. Malesuada neque vel vitae magna nunc viverra."
        time="6 hours ago"
        type="Inquiries"
      />

      <MessageCard
        title="Lorem Ipsum"
        propertyName="Property name"
        content="Lorem ipsum dolor sit amet consectetur. Urna malesuada aenean proin aliquet amet enim quisque ac est. Lectus eu dictum ipsum adipiscing urna elit. Faucibus ut mauris nibh pulvinar. Pharelius integer massa egestas vitae."
        time="6 hours ago"
        type="Inquiries"
      />
    </div>
  );
};

export default MessagesSection;