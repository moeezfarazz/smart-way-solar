import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'auto';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'dark',
  showTagline = false
}) => {
  const isLight = variant === 'light';

  return (
    <Link
      to="/"
      aria-label="Smart Way Solar - Home"
      className={`inline-flex items-center gap-3 group transition-opacity hover:opacity-95 ${className}`}
    >
      {/* Modern House & Solar Silhouette Symbol matching reference aesthetic */}
      <div className="relative flex items-center justify-center w-8 h-8 flex-shrink-0 text-[#7aefb1] transition-transform group-hover:scale-105">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          aria-hidden="true"
        >
          {/* House Contour Outline */}
          <path
            d="M16 4.5L5 13.5V26.5C5 27.6046 5.89543 28.5 7 28.5H25C26.1046 28.5 27 27.6046 27 26.5V13.5L16 4.5Z"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Inner Clean Solar Crest / Roof Horizon */}
          <path
            d="M16 12L21 16.2V23.5H11V16.2L16 12Z"
            stroke={isLight ? '#ffffff' : '#111827'}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-colors"
          />
          {/* Sun Core Dot */}
          <circle cx="16" cy="18" r="2" fill="currentColor" />
        </svg>
      </div>

      {/* Brand Wordmark */}
      <div className="flex flex-col">
        <div className="flex items-baseline tracking-tight text-[1.25rem] font-bold leading-none">
          <span className={isLight ? 'text-white' : 'text-gray-950'}>
            Smart Way
          </span>
          <span className="text-[#7aefb1] ml-1.5 font-semibold">
            Solar
          </span>
        </div>
        {showTagline && (
          <span className={`text-[0.65rem] tracking-wider uppercase font-semibold mt-1 ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>
            Home Energy Systems
          </span>
        )}
      </div>
    </Link>
  );
};
