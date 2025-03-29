import dashboardIcon from '../images/dashboard.png';
import reviewsIcon from '../images/reviews.png';
import negativeReviewsIcon from '../images/negative.png';
import enquiriesIcon from '../images/negative.png';
import projectsIcon from '../images/projects.png';
import advertiseIcon from '../images/advertise.png';
import editProfileIcon from '../images/edit.png';
import subscriptionIcon from '../images/subscription.png';
import widgetIcon from '../images/negative.png';
import supportIcon from '../images/support.png';

const SidebarItem = ({ icon, label, active = false }) => {
  // Special treatment for these three items
  const shouldSingleLine = [
    'Negative Reviews',
    'Website Widget', 
    'Customer Support'
  ].includes(label);

  return (
    <div
      className={`flex items-center gap-6 px-6 py-3 rounded-lg ${
        active ? "bg-[#0F0B2D] text-white" : "bg-[#F4F4F4] text-[#000000] hover:bg-gray-200"
      } ${shouldSingleLine ? 'whitespace-nowrap' : ''}`}
    >
      <img src={icon} alt={label} className="w-5 h-5" />
      <span className="font-normal">{label}</span>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="w-[220px] bg-white h-screen p-4 flex flex-col gap-8 border-r border-gray-200">
      <div className="mb-4 px-6 py-4">
        {/* Optional: Add your logo here if needed */}
      </div>
      
      <div className="flex flex-col gap-4 ">
        <SidebarItem icon={dashboardIcon} label="Dashboard" active={true} />
        <SidebarItem icon={reviewsIcon} label="Get Reviews" />
        <SidebarItem icon={enquiriesIcon} label="New Enquiries" />
        <SidebarItem icon={projectsIcon} label="Your Projects" />
        <SidebarItem icon={advertiseIcon} label="Advertise" />
        <SidebarItem icon={editProfileIcon} label="Edit Profile" />
        <SidebarItem icon={subscriptionIcon} label="Subscription" />
        
        {/* These will display their text in single line */}
        <SidebarItem icon={negativeReviewsIcon} label="Negative Reviews" />
        <SidebarItem icon={widgetIcon} label="Website Widget" />
        
        {/* Customer Support (special styling) */}
        <div className="flex justify-between items-center px-6 py-3 rounded-lg bg-[#F4F4F4]">
          <span className="font-normal text-[#000000] whitespace-nowrap">Customer Support</span>
          <img src={supportIcon} alt="Customer Support" className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;