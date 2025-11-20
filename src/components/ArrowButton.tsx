import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface ArrowButtonProps {
  direction: "left" | "right";
  onClick: () => void;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ direction, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        p-3 
        bg-[#1c2634] 
        text-white 
        rounded-full 
        shadow-lg 
        hover:bg-gradient-to-r 
        hover:from-amber-400 
        hover:to-yellow-600 
        hover:text-gray-900
        transition-all 
        duration-300
      "
    >
      {direction === "left" ? (
        <ChevronLeftIcon className="h-6 w-6" />
      ) : (
        <ChevronRightIcon className="h-6 w-6" />
      )}
    </button>
  );
};

export default ArrowButton;
