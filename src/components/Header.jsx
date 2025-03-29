import logo from '../images/logo.png';
import profilePic from '../images/profile.png';
import bellIcon from '../images/noti.png';

const Header = ({ username = "Ipsum_Lorem" }) => {
  return (
    <div className="flex justify-between items-center py-4 px-8 bg-white border-b border-gray-200 h-20">
      {/* Left side - Logo */}
      <div className="flex items-center h-full">
        <img 
          src={logo} 
          alt="Company Logo" 
          className="h-12"  
        />
      </div>

      {/* Right side - Icons and profile */}
      <div className="flex items-center gap-8">
        {/* Notification Bell with indicator */}
        <div className="relative">
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
          <img 
            src={bellIcon} 
            alt="Notifications" 
            className="h-7 w-7"
          />
        </div>
        
        {/* User Profile */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200">
            <img 
              src={profilePic} 
              alt="User Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-base font-semibold text-gray-800">{username}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;