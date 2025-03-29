import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import StatsCard from "../components/StatsCard";
import AddProjectButton from "../components/AddProjectButton";
import MessagesSection from "../components/MessageSection";
import ProjectsSection from "../components/ProjectsSection";
import ReviewsSection from "../components/ReviewSection";
import AnalyticsSection from "../components/AnalyticsSection";
import Logo1 from "../images/logo1.png";

const Homepage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <Header username="Ipsum!" />
      </header>

      {/* Main Layout */}
      <div className="flex pt-16 h-screen">
        {/* Fixed Sidebar */}
        <aside className="fixed left-0 top-16 bottom-0 w-56 bg-gray-50 border-r border-gray-200 overflow-y-auto">
          <Sidebar />
        </aside>

        {/* Scrollable Main Content */}
        <main className="flex-1 ml-56 overflow-y-auto">
          <div className="p-6">
            {/* Welcome Message with Image */}
            <div className="flex items-center gap-4 mb-6">
              <img 
                src={Logo1}
                alt="Welcome"
                className="w-12 h-12 rounded-full object-cover"
              />
              <h1 className="text-2xl font-400 text-black">Welcome to your dashboard, Ipsum!</h1>
            </div>

            {/* Add Project Button */}
            <AddProjectButton />

            {/* Stats Cards Grid */}
            <div className="space-y-4 mb-6">
              {/* First Row - 5 Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <StatsCard
                  value="111"
                  label="Total Reviews"
                  icon="⭐"
                  increase="10% increase from last week"
                  className="h-full"
                />
                <StatsCard
                  value="55"
                  label="Reviews collected"
                  icon="🔗"
                  increase="10% increase from last week"
                  className="h-full"
                />
                <StatsCard
                  value="70"
                  label="Review request sent"
                  icon="🔗"
                  increase="10% increase from last week"
                  className="h-full"
                />
                <StatsCard
                  value="20"
                  label="Project Listed"
                  icon="📊"
                  increase="1 new listing in this week"
                  className="h-full"
                />
                <StatsCard
                  value="4.5"
                  label="Review Average"
                  icon="⭐"
                  increase="10% increase from last week"
                  className="h-full"
                />
              </div>

              {/* Second Row - 6th Stats Card */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <StatsCard
                  value="10"
                  label="Negative feedback resolved"
                  icon="🔗"
                  increase="5% increase from last week"
                  className="h-full"
                />
              </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <MessagesSection />
              <div className="space-y-6">
                <ProjectsSection />
                <ReviewsSection />
              </div>
            </div>

            {/* Analytics Section */}
            <AnalyticsSection />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Homepage;