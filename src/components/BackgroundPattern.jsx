import React from "react";

const BackgroundPattern = () => {
  return (
    <div className="fixed inset-0 z-[-1] opacity-25">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <pattern
            id="book-pattern"
            x="0"
            y="0"
            width="300"
            height="300"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(135)"
          >
            <rect width="300" height="300" fill="#F0F4F8" />

            {/* Book icon */}
            <path
              d="M10 5C10 3.89543 10.8954 3 12 3H38C39.1046 3 40 3.89543 40 5V45C40 46.1046 39.1046 47 38 47H12C10.8954 47 10 46.1046 10 45V5Z"
              fill="#4A5568"
            />
            <path d="M13 8H37V42H13V8Z" fill="#E2E8F0" />
            <path d="M17 13H33V15H17V13Z" fill="#A0AEC0" />
            <path d="M17 20H33V22H17V20Z" fill="#A0AEC0" />
            <path d="M17 27H33V29H17V27Z" fill="#A0AEC0" />

            {/* Lightning bolt icon */}
            <path d="M80 10L65 30H75L70 50L85 30H75L80 10Z" fill="#D69E2E" />

            {/* Library icon */}
            <path d="M110 5H140V45H110V5Z" fill="#2D3748" />
            <path d="M115 10H120V40H115V10Z" fill="#DD6B20" />
            <path d="M122 10H127V40H122V10Z" fill="#38A169" />
            <path d="M129 10H134V40H129V10Z" fill="#3182CE" />

            {/* Glasses icon */}
            <path
              d="M10 80C10 74.4772 14.4772 70 20 70C25.5228 70 30 74.4772 30 80C30 85.5228 25.5228 90 20 90C14.4772 90 10 85.5228 10 80Z"
              fill="none"
              stroke="#4A5568"
              strokeWidth="2"
            />
            <path d="M30 80H40" stroke="#4A5568" strokeWidth="2" />
            <path
              d="M40 80C40 74.4772 44.4772 70 50 70C55.5228 70 60 74.4772 60 80C60 85.5228 55.5228 90 50 90C44.4772 90 40 85.5228 40 80Z"
              fill="none"
              stroke="#4A5568"
              strokeWidth="2"
            />

            {/* Pen icon */}
            <path d="M80 70L90 80L85 85L75 75L80 70Z" fill="#2D3748" />
            <path d="M75 75L85 85L70 90L75 75Z" fill="#718096" />

            {/* Coffee cup icon */}
            <path
              d="M110 90C110 92.7614 112.239 95 115 95H135C137.761 95 140 92.7614 140 90V75H110V90Z"
              fill="#718096"
            />
            <path
              d="M140 75H145C147.761 75 150 77.2386 150 80V80C150 82.7614 147.761 85 145 85H140"
              fill="#4A5568"
            />

            {/* New icons */}

            {/* Bookmark icon */}
            <path d="M160 10V50L175 35L190 50V10H160Z" fill="#ED8936" />

            {/* Magnifying glass icon */}
            <circle
              cx="185"
              cy="75"
              r="15"
              stroke="#4A5568"
              strokeWidth="4"
              fill="none"
            />
            <path d="M195 85L210 100" stroke="#4A5568" strokeWidth="4" />

            {/* Typewriter icon */}
            <rect x="220" y="10" width="60" height="40" rx="5" fill="#2D3748" />
            <rect x="225" y="15" width="50" height="20" fill="#E2E8F0" />
            <circle cx="230" cy="45" r="3" fill="#A0AEC0" />
            <circle cx="240" cy="45" r="3" fill="#A0AEC0" />
            <circle cx="250" cy="45" r="3" fill="#A0AEC0" />
            <circle cx="260" cy="45" r="3" fill="#A0AEC0" />
            <circle cx="270" cy="45" r="3" fill="#A0AEC0" />

            {/* Quill icon */}
            <path
              d="M220 70C220 70 235 85 250 70C265 55 280 70 280 70L250 100L220 70Z"
              fill="#4A5568"
            />

            {/* Scroll icon */}
            <path
              d="M10 110H60V150C60 155.523 55.5228 160 50 160H20C14.4772 160 10 155.523 10 150V110Z"
              fill="#D69E2E"
            />
            <path
              d="M10 110C10 104.477 14.4772 100 20 100H50C55.5228 100 60 104.477 60 110"
              fill="#F6E05E"
            />
            <path d="M20 120H50V125H20V120Z" fill="#744210" />
            <path d="M20 130H50V135H20V130Z" fill="#744210" />

            {/* Globe icon */}
            <circle cx="95" cy="130" r="25" fill="#4299E1" />
            <path d="M70 130H120M95 105V155" stroke="#2B6CB0" strokeWidth="2" />
            <path
              d="M75 115C75 115 85 145 115 145"
              stroke="#2B6CB0"
              strokeWidth="2"
            />
            <path
              d="M115 115C115 115 105 145 75 145"
              stroke="#2B6CB0"
              strokeWidth="2"
            />

            {/* Idea (lightbulb) icon */}
            <path
              d="M160 120C160 108.954 168.954 100 180 100V100C191.046 100 200 108.954 200 120V130H160V120Z"
              fill="#ECC94B"
            />
            <rect x="165" y="130" width="30" height="10" fill="#D69E2E" />
            <rect x="170" y="140" width="20" height="5" fill="#B7791F" />

            {/* Notebook icon */}
            <rect
              x="220"
              y="110"
              width="40"
              height="50"
              rx="2"
              fill="#4A5568"
            />
            <rect x="225" y="115" width="30" height="5" fill="#A0AEC0" />
            <rect x="225" y="125" width="30" height="5" fill="#A0AEC0" />
            <rect x="225" y="135" width="30" height="5" fill="#A0AEC0" />
            <rect x="225" y="145" width="30" height="5" fill="#A0AEC0" />
            <rect x="260" y="110" width="5" height="50" fill="#2D3748" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#book-pattern)" />
      </svg>
    </div>
  );
};

export default BackgroundPattern;
