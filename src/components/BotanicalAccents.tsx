import React from 'react';

export const BotanicalBranchLeft: React.FC<{ className?: string }> = ({ className = "w-28 h-auto opacity-70" }) => (
  <svg
    viewBox="0 0 120 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Delicate sage botanical branch */}
    <path
      d="M100 170 Q 70 120 40 40 Q 30 15 10 5"
      stroke="#8A9678"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.8"
    />
    {/* Leaves with soft watercolor fill */}
    <path
      d="M38 42 C 20 30 10 38 18 55 C 24 62 38 52 38 42 Z"
      fill="#8A9678"
      fillOpacity="0.45"
      stroke="#738063"
      strokeWidth="0.8"
    />
    <path
      d="M48 68 C 65 55 76 64 68 80 C 60 88 48 78 48 68 Z"
      fill="#8A9678"
      fillOpacity="0.4"
      stroke="#738063"
      strokeWidth="0.8"
    />
    <path
      d="M58 98 C 38 90 28 102 36 118 C 44 124 58 110 58 98 Z"
      fill="#8A9678"
      fillOpacity="0.45"
      stroke="#738063"
      strokeWidth="0.8"
    />
    <path
      d="M72 126 C 90 115 100 125 92 140 C 85 146 72 136 72 126 Z"
      fill="#8A9678"
      fillOpacity="0.35"
      stroke="#738063"
      strokeWidth="0.8"
    />
    <path
      d="M18 12 C 10 2 0 8 5 18 C 10 24 20 18 18 12 Z"
      fill="#8A9678"
      fillOpacity="0.5"
      stroke="#738063"
      strokeWidth="0.8"
    />
  </svg>
);

export const BotanicalBranchRight: React.FC<{ className?: string }> = ({ className = "w-28 h-auto opacity-70" }) => (
  <svg
    viewBox="0 0 120 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Delicate sage botanical branch curved opposite */}
    <path
      d="M20 170 Q 50 120 80 40 Q 90 15 110 5"
      stroke="#8A9678"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.8"
    />
    <path
      d="M82 42 C 100 30 110 38 102 55 C 96 62 82 52 82 42 Z"
      fill="#8A9678"
      fillOpacity="0.45"
      stroke="#738063"
      strokeWidth="0.8"
    />
    <path
      d="M72 68 C 55 55 44 64 52 80 C 60 88 72 78 72 68 Z"
      fill="#8A9678"
      fillOpacity="0.4"
      stroke="#738063"
      strokeWidth="0.8"
    />
    <path
      d="M62 98 C 82 90 92 102 84 118 C 76 124 62 110 62 98 Z"
      fill="#8A9678"
      fillOpacity="0.45"
      stroke="#738063"
      strokeWidth="0.8"
    />
    <path
      d="M48 126 C 30 115 20 125 28 140 C 35 146 48 136 48 126 Z"
      fill="#8A9678"
      fillOpacity="0.35"
      stroke="#738063"
      strokeWidth="0.8"
    />
    <path
      d="M102 12 C 110 2 120 8 115 18 C 110 24 100 18 102 12 Z"
      fill="#8A9678"
      fillOpacity="0.5"
      stroke="#738063"
      strokeWidth="0.8"
    />
  </svg>
);

export const StarSparkle: React.FC<{ className?: string; color?: string }> = ({ 
  className = "w-5 h-5",
  color = "#D88C76"
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M12 0 C 12 7 13 11 24 12 C 13 13 12 17 12 24 C 12 17 11 13 0 12 C 11 11 12 7 12 0 Z"
      fill={color}
      fillOpacity="0.75"
    />
  </svg>
);

export const SmallLeaf: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M5 35 C 10 20 25 10 35 5 C 30 20 15 30 5 35 Z"
      fill="#8A9678"
      fillOpacity="0.45"
      stroke="#738063"
      strokeWidth="1"
    />
    <path
      d="M5 35 Q 20 20 35 5"
      stroke="#738063"
      strokeWidth="0.8"
    />
  </svg>
);
