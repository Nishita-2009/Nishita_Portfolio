import React from 'react';

export function GithubIcon({ size = 16, className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export function LinkedinIcon({ size = 16, className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export function HexCubeIcon({ size = 18, className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
      <polyline points="7.5 19.79 7.5 14.6 3 12" />
      <polyline points="21 12 16.5 14.6 16.5 19.79" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}

export function SparkleStarIcon({ size = 14, className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 1L14.2 9.8L23 12L14.2 14.2L12 23L9.8 14.2L1 12L9.8 9.8L12 1Z" />
    </svg>
  );
}

export function BotanicalAccentSvg({ className = "" }) {
  return (
    <svg
      viewBox="0 0 180 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Main stem */}
      <path
        d="M145 215C132 175 112 132 78 72"
        stroke="#71303D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeOpacity="0.65"
      />
      <path
        d="M158 215C152 168 144 125 134 62"
        stroke="#4A252C"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeOpacity="0.5"
      />
      {/* Leaves */}
      <path
        d="M108 128C82 122 65 104 60 82C84 85 104 102 108 128Z"
        fill="#71303D"
        fillOpacity="0.78"
      />
      <path
        d="M124 156C96 156 76 142 66 122C90 121 112 134 124 156Z"
        fill="#8E4652"
        fillOpacity="0.65"
      />
      <path
        d="M136 96C128 68 134 44 148 26C156 48 152 74 136 96Z"
        fill="#3B2327"
        fillOpacity="0.75"
      />
      <path
        d="M115 108C105 80 106 54 118 35C128 56 128 84 115 108Z"
        fill="#71303D"
        fillOpacity="0.68"
      />
      <path
        d="M148 142C146 114 156 90 174 74C176 98 166 124 148 142Z"
        fill="#9F5662"
        fillOpacity="0.6"
      />
      <path
        d="M90 92C72 78 62 56 64 34C82 44 92 66 90 92Z"
        fill="#4A252C"
        fillOpacity="0.7"
      />
    </svg>
  );
}
