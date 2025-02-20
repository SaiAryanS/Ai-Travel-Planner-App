import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FaMapMarkedAlt, FaPlane, FaRegLightbulb } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="flex flex-col items-center text-center px-5 md:px-32 lg:px-56 gap-9 mt-16">
      {/* Hero Title */}
      <h1 className="font-extrabold text-4xl md:text-5xl">
        <span className="text-[#f56551]">Discover Your Adventure with AI</span>:  
        Plan Smarter, Travel Better
      </h1>

      {/* Hero Subtitle */}
      <p className="text-lg text-gray-600 max-w-3xl">
        Experience personalized, AI-driven itineraries tailored to your
        budget, interests, and travel style. Say goodbye to planning stress!
      </p>

      {/* Call to Action Button */}
      <Link to="/create-trip">
        <Button className="px-6 py-3 text-lg font-semibold">
          Get Started – It’s Free 🚀
        </Button>
      </Link>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <FeatureCard
          icon={<FaMapMarkedAlt className="text-4xl text-blue-500" />}
          title="AI-Powered Itineraries"
          description="Instantly generate day-by-day travel plans customized to your preferences."
        />
        <FeatureCard
          icon={<FaPlane className="text-4xl text-green-500" />}
          title="Budget-Friendly Travel"
          description="Find the best deals on hotels, attractions, and experiences within your budget."
        />
        <FeatureCard
          icon={<FaRegLightbulb className="text-4xl text-yellow-500" />}
          title="Smart Recommendations"
          description="Discover top-rated restaurants, hidden gems, and must-visit attractions."
        />
      </div>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-5 border rounded-xl shadow-lg hover:shadow-xl transition duration-300">
      {icon}
      <h2 className="font-bold text-xl mt-3">{title}</h2>
      <p className="text-gray-500 mt-2">{description}</p>
    </div>
  );
};

export default Hero;
