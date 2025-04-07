import React from "react";

const CustomerReviewPage = () => {
  const reviews = [
    {
      name: "Alice Johnson",
      comment: "Amazing service! I'm so happy with my purchase.",
      rating: 5,
    },
    {
      name: "Bob Smith",
      comment: "Good quality, fast shipping. Will buy again.",
      rating: 4,
    },
    {
      name: "Charlie Lee",
      comment: "Product was okay, but packaging could be better.",
      rating: 3,
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Customer Reviews</h1>
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="p-4 rounded-2xl shadow-md bg-white border border-gray-200"
          >
            <h2 className="text-xl font-semibold">{review.name}</h2>
            <p className="text-yellow-500 mb-2">
              {"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}
            </p>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviewPage;
