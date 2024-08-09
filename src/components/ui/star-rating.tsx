import React from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ count }) => {
  return (
    <div className="flex">
      {Array.from({ length: count }, (_, index) => (
        <FaStar key={index} size={20} className="text-yellow-500 hidden md:block" />
      ))}
    </div>
  );
};

export default StarRating;