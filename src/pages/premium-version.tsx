import React from "react";

const PremiumVersionPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4 text-indigo-700">
          Upgrade to Premium
        </h1>
        <p className="text-gray-700 mb-6">
          Unlock exclusive features and enjoy an enhanced experience with our
          Premium Version.
        </p>

        <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
          <ul className="text-left space-y-3 mb-6">
            <li>✅ Ad-free browsing experience</li>
            <li>✅ Access to premium content</li>
            <li>✅ Priority customer support</li>
            <li>✅ Early access to new features</li>
          </ul>

          <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700 transition">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PremiumVersionPage;
