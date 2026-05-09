import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  const features = [
    {
      title: "Accurate Scouting Reports",
      description:
        "Analyze player performance across high school and college levels using real metrics.",
    },
    {
      title: "Custom Player Profiles",
      description:
        "Build and personalize athlete pages for scouts and coaches to view stats and performance.",
    },
    {
      title: "Smart Contract Projections",
      description: "Estimate fair player value using real data and trends.",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6 bg-blue-800 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          NFLVP — The Future of D3 Football Scouting
        </h1>
        <p className="text-lg max-w-2xl mb-8 text-gray-200">
          Bridging the gap between hidden talent and elite opportunity.
        </p>
        <button
          onClick={() => navigate("/prop")}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full shadow-lg transition"
        >
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
        <div className="grid gap-10 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-2xl p-6 shadow-lg hover:scale-[1.02] transition"
            >
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-700 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-gray-900 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} NFLVP.com — All Rights Reserved.
      </footer>
    </div>
  );
}
