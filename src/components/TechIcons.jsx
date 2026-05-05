export const JsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
    <path d="M4 4H20V20H4V4Z" fill="#F7DF1E" />
    <path d="M12.87 18.25C13.2 18.66 13.88 19.38 14.86 19.38C15.82 19.38 16.59 18.77 16.59 17.65C16.59 15.93 13.06 15.65 13.06 12.8C13.06 11.23 14.39 9.87 16.32 9.87C17.5 9.87 18.3 10.38 18.8 11.08L17.22 12.11C16.88 11.62 16.48 11.45 15.96 11.45C15.22 11.45 14.73 11.89 14.73 12.59C14.73 14.16 18.3 14.28 18.3 17.38C18.3 19.78 16.14 21.05 14.47 21.05C12.75 21.05 11.66 20.12 11.08 19.46L12.87 18.25ZM9.1 19.23C8.6 19.56 7.9 20.08 6.96 20.08C5.58 20.08 4.7 19.08 4.7 17.33V10.13H6.55V17.06C6.55 18.17 7 18.7 7.74 18.7C8.25 18.7 8.65 18.42 8.95 18.15L10.05 19.68C9.77 19.98 9.4 20.2 9.1 19.23Z" fill="black" />
  </svg>
);

export const ReactIcon = () => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
    <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
    <g stroke="#61dafb" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

export const NextIcon = () => (
  <svg width="32" height="32" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M90 180C139.706 180 180 139.706 180 90C180 40.2944 139.706 0 90 0C40.2944 0 0 40.2944 0 90C0 139.706 40.2944 180 90 180Z" fill="white" />
    <path d="M149.508 157.679L69.142 61.2H54V118.8H65.88V77.721L138.314 167.147C142.278 164.298 146.038 161.127 149.508 157.679Z" fill="url(#paint0_linear)" />
    <path d="M115.2 61.2H127.08V118.8H115.2V61.2Z" fill="black" />
    <defs>
      <linearGradient id="paint0_linear" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="black" />
        <stop offset="1" stopColor="black" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

// We substitute complex svgs with standard simple icons or text where necessary to save lines
export const VueIcon = () => (
  <svg width="32" height="32" viewBox="0 0 256 221" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
    <path d="M204.8 0H256L128 220.8L0 0H51.2L128 132.48L204.8 0Z" fill="#41B883" />
    <path d="M0 0L128 220.8L256 0H204.8L128 132.48L51.2 0H0Z" fill="#41B883" />
    <path d="M51.2 0L128 132.48L204.8 0H153.6L128 44.16L102.4 0H51.2Z" fill="#34495E" />
  </svg>
);

export const MongoIcon = () => (
  <svg width="32" height="32" viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
    <path fill="#47A248" d="M113.8 231.8c-24-33-31-64.8-29.2-97.7.8-14.5 12.8-54.8 29.4-118 4.7-17.7 13.1-15.6 15.6 0 16.5 63 28.5 103.2 29.3 118 1.9 33-5 64.9-29.5 97.7H113.8z" />
  </svg>
);

export const GitIcon = () => (
  <svg width="32" height="32" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
    <path fill="#F1502F" d="M125 18l113 113c4 4 4 10 0 14L141 242c-4 4-10 4-14 0L14 129c-4-4-4-10 0-14L111 2c4-4 10-4 14 0l0 16z" />
    <path fill="#ffffff" d="M128 47L89 86c-4-4-10-6-16-6-12 0-22 10-22 22s10 22 22 22c11 0 20-8 22-18l33 33v58c-3 1-6 3-8 6-6 10-3 23 7 29s23-3 29-7c10-6 13-19 7-29-2-3-5-5-8-6v-58l29-29c4 4 10 6 16 6 12 0 22-10 22-22s-10-22-22-22-22 10-22 22c0 2 0 4 1 6l-28 28-28-28c1-2 1-4 1-6 0-12-10-22-22-22z" />
  </svg>
);

export const TailwindIcon = () => (
  <svg width="32" height="32" viewBox="0 0 256 154" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
    <path fill="#38bdf8" d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8z" />
  </svg>
);

export const CssIcon = () => (
  <svg width="32" height="32" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
    <path fill="#264de4" d="M42 239L20 0l215 0-22 239-85 24z" />
    <path fill="#2965f1" d="M128 241l73-20 18-192-91 0z" />
    <path fill="#ebebeb" d="M128 111l-36 0-3-28 39 0 0-30-74 0 9 88 65 0zM128 184l-38-11-2-25-30 0 4 52 66 18c0 0 0 0 0 0z" />
    <path fill="#ffffff" d="M128 111l35 0-4 44-31 9 0 32 66-18 6-77-72 0zM128 53l74 0-3-30-71 0z" />
  </svg>
);

export const NodeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="#339933" d="M11.874 0L1.75 5.83v11.666l10.124 5.829 10.125-5.83V5.83zM8.196 16.535l-.013-6.289-2.923 4.296v-5.69h1.724v6.236l2.846-4.14v5.587zm7.525.07c-2.484 0-3.568-1.503-3.568-3.488v-.03c0-1.929.988-3.535 3.524-3.535 1.554 0 2.502.66 2.915 1.706l-1.52.793c-.22-.533-.76-.874-1.395-.874-.913 0-1.63.766-1.63 1.91v.03c0 1.258.746 1.83 1.63 1.83.67 0 1.185-.366 1.455-.913l1.505.746c-.532 1.096-1.52 1.825-2.916 1.825z" />
  </svg>
);

export const ExpressIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="16" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="currentColor">ex</text>
  </svg>
);

export const ReduxIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="#764ABC" d="M16.94 13.91c-.02-.56-.4-1.03-.94-1.14-.06-.01-.13-.01-.2 0-2.34.33-4.63.14-6.85-.56.99-.95 2.11-1.74 3.32-2.31 2.37-1.12 5.06-1.63 7.69-1.46.54.04 1.03.4 1.13.94.1.56-.23 1.12-.76 1.28-2.38.74-4.87 1.14-7.42 1.18 1.41.67 2.76 1.47 4.04 2.39.46.33.56.97.23 1.43-.32.45-.96.55-1.42.23-1.67-1.19-3.41-2.26-5.23-3.17 1.58-.29 3.19-.38 4.79-.27.53.04 1.01-.32 1.05-.85 0-.03 0-.06 0-.09zM8.33 16.91c-.56-.02-1.03-.4-1.14-.94-.01-.06-.01-.13 0-.2.33-2.34.14-4.63-.56-6.85-.95.99-1.74 2.11-2.31 3.32-1.12 2.37-1.63 5.06-1.46 7.69.04.54.4 1.03.94 1.13.56.1 1.12-.23 1.28-.76.74-2.38 1.14-4.87 1.18-7.42.67 1.41 1.47 2.76 2.39 4.04.33.46.97.56 1.43.23.45-.32.55-.96.23-1.42-1.19-1.67-2.26-3.41-3.17-5.23-.29 1.58-.38 3.19-.27 4.79.04.53-.32 1.01-.85 1.05-.03 0-.06 0-.09 0zm8.58-8.58c-.54.16-1.12-.15-1.28-.69-.74-2.38-1.14-4.87-1.18-7.42.06.56.4 1.03.94 1.14.06.01.13.01.2 0 2.34-.33 4.63-.14 6.85.56-.99.95-2.11 1.74-3.32 2.31-2.37 1.12-5.06 1.63-7.69 1.46-.54-.04-1.03-.4-1.13-.94-.1-.56.23-1.12.76-1.28 2.38-.74 4.87-1.14 7.42-1.18-1.41-.67-2.76-1.47-4.04-2.39-.46-.33-.56-.97-.23-1.43.32-.45.96-.55 1.42-.23 1.67 1.19 3.41 2.26 5.23 3.17-1.58.29-3.19.38-4.79.27-.53-.04-1.01.32-1.05.85z" />
  </svg>
);

export const GithubIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

export const TypeScriptIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="18" height="18" rx="2" fill="#3178C6" />
    <text x="12" y="16" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="bold" fill="white" textAnchor="middle">TS</text>
  </svg>
);

export const PythonIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="#3776AB" d="M12 2c-5.5 0-5.3 2.4-5.3 2.4l.01 2.5h5.4v.7H6.5S3 7.3 3 12c0 4.7 3.1 4.5 3.1 4.5h1.7v-2.3s-.1-2.8 2.7-2.8h4.5s2.6 0 2.6-2.5V4.6S17.6 2 12 2zm-1.6 3.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
    <path fill="#FFD43B" d="M12 22c5.5 0 5.3-2.4 5.3-2.4l-.01-2.5h-5.4v-.7h5.6s3.5.3 3.5-4.4c0-4.7-3.1-4.5-3.1-4.5h-1.7v2.3s.1 2.8-2.7 2.8H9s-2.6 0-2.6 2.5v4.3S6.4 22 12 22zm1.6-3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
  </svg>
);

export const ScssIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="12" y="16" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="bold" fill="#CC6699" textAnchor="middle">SCSS</text>
  </svg>
);

export const DockerIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="#2496ED" d="M1.5 11.2h2.2v2.2H1.5zm3.4 0h2.2v2.2H4.9zm0-3.4h2.2v2.2H4.9zm3.4 3.4h2.2v2.2H8.3zm0-3.4h2.2v2.2H8.3zm0-3.4h2.2v2.2H8.3zm3.4 6.8h2.2v2.2h-2.2zm0-3.4h2.2v2.2h-2.2zm0-3.4h2.2v2.2h-2.2zm3.4 3.4h2.2v2.2h-2.2zm3.8 2.2c-.3 0-.6.1-.9.1 0-.1 0-.1 0-.2.6-3-1.8-3.7-1.8-3.7l-.3 1.6c-.3-1.5-1.7-1.8-2.6-1.5-.1 0-.2-.1-.2-.1-.5-3.3-3.6-2.9-3.6-2.9l.4 1.7c-.4-1.3-1.6-1.7-2.6-1.5 0 0-.1-.1-.1-.1C2.3 8.3 0 10.3 0 13c0 2.2 1.8 4 4.1 4h14.5c2.9 0 5.4-2.4 5.4-5.3 0-2.3-1.7-4.2-4-4.5zM7.2 15.6c-1 0-1.8-.8-1.8-1.8 0-1 .8-1.8 1.8-1.8 1 0 1.8.8 1.8 1.8 0 1-.8 1.8-1.8 1.8z" />
  </svg>
);

export const PhpIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="6" width="22" height="12" rx="6" fill="#777BB4" />
    <text x="12" y="15" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="bold" fill="white" textAnchor="middle">PHP</text>
  </svg>
);

export const TensorFlowIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="#FF6F00" d="M11.2 5.5v12.2l-3.5 2V8l-4.5 2.5V7l8-4.5zM14.5 7.5L20 4.5v3.5l-5.5 3v-3.5zm0 5v9l-3.5-2V10l3.5 2.5z" />
  </svg>
);

export const JupyterIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11" fill="#F37626" />
    <text x="12" y="15" fontFamily="Arial, sans-serif" fontSize="7" fontWeight="bold" fill="white" textAnchor="middle">JUPYTER</text>
  </svg>
);

export const HTMLIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="#E34F26" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.16l-.23-2.65H4.16l.172 1.911h11.23l-.146 1.63H4.49l.343 3.86h10.428l-.32 3.614-4.52 1.258-4.524-1.258-.19-2.16H3.344l.325 3.654 6.84 1.905 6.837-1.905.626-7.013H7.07l-.143-1.63h11.662z" />
  </svg>
);

export const FigmaIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="#F24E1E" d="M8 2h4.06c2.24 0 4.06 1.83 4.06 4.06S14.3 10.12 12.06 10.12H8V2z" />
    <path fill="#A259FF" d="M8 10.12h4.06c2.24 0 4.06 1.83 4.06 4.06s-1.83 4.06-4.06 4.06H8v-8.12z" />
    <path fill="#0ACF83" d="M8 18.25v1.69A4.06 4.06 0 1 0 12.06 24V18.25H8z" />
    <path fill="#FF7262" d="M3.94 6.06A4.06 4.06 0 1 0 8 10.12V2C5.76 2 3.94 3.83 3.94 6.06z" />
    <path fill="#1ABCFE" d="M3.94 14.18A4.06 4.06 0 1 0 8 18.25v-8.12C5.76 10.12 3.94 11.95 3.94 14.18z" />
  </svg>
);

export const LucideIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="12 2 2 22 22 22" stroke="#F43F5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="rgba(244, 63, 94, 0.2)"/>
    <text x="12" y="16" fontFamily="Arial, sans-serif" fontSize="5" fontWeight="bold" fill="white" textAnchor="middle">LUCIDE</text>
  </svg>
);

export const VsCodeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="4" fill="#007ACC" />
    <text x="12" y="15" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="bold" fill="white" textAnchor="middle">VS</text>
  </svg>
);

export const GoogleColabIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#F9AB00" />
    <text x="12" y="15" fontFamily="Arial, sans-serif" fontSize="7" fontWeight="bold" fill="white" textAnchor="middle">COLAB</text>
  </svg>
);

export const TableauIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="4" fill="#E97B34" />
    <text x="12" y="15" fontFamily="Arial, sans-serif" fontSize="6" fontWeight="bold" fill="white" textAnchor="middle">TABLEAU</text>
  </svg>
);

export const PowerBIIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="4" fill="#F2C811" />
    <text x="12" y="15" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="bold" fill="black" textAnchor="middle">PBI</text>
  </svg>
);

export const PostmanIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#FF6C37" />
    <text x="12" y="16" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="white" textAnchor="middle">P</text>
  </svg>
);

export const RestApiIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="4" fill="#00A651" />
    <text x="12" y="15" fontFamily="Arial, sans-serif" fontSize="7" fontWeight="bold" fill="white" textAnchor="middle">REST</text>
  </svg>
);

export const MysqlIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="20" height="16" rx="3" fill="#4479A1" />
    <text x="12" y="15" fontFamily="Arial, sans-serif" fontSize="6" fontWeight="bold" fill="white" textAnchor="middle">MySQL</text>
  </svg>
);

export const JavaIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="4" fill="#ED8B00" />
    <text x="12" y="15" fontFamily="Arial, sans-serif" fontSize="7" fontWeight="bold" fill="white" textAnchor="middle">JAVA</text>
  </svg>
);

export const OpenCVIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="7" r="4" stroke="#FF0000" strokeWidth="2" />
    <circle cx="7" cy="15" r="4" stroke="#00FF00" strokeWidth="2" />
    <circle cx="17" cy="15" r="4" stroke="#0000FF" strokeWidth="2" />
  </svg>
);

export const WebDevIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="20" height="16" rx="2" fill="#2D3748" />
    <path d="M6 8H8M10 8H12M14 8H18" stroke="#A0AEC0" strokeWidth="2" strokeLinecap="round" />
    <path d="M6 12L10 16L6 20" stroke="#48BB78" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const DataAnalyticsIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="14" width="4" height="6" fill="#4299E1" />
    <rect x="10" y="10" width="4" height="10" fill="#48BB78" />
    <rect x="16" y="4" width="4" height="16" fill="#ED8936" />
    <path d="M2 22H22" stroke="gray" strokeWidth="2" />
  </svg>
);
