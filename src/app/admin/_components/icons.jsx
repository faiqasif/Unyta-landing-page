const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export const DashboardIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="3" y="3" width="7" height="9" rx="2" />
    <rect x="14" y="3" width="7" height="5" rx="2" />
    <rect x="14" y="12" width="7" height="9" rx="2" />
    <rect x="3" y="16" width="7" height="5" rx="2" />
  </svg>
);

export const CreatorsIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
    <path d="M16 5.2a3.5 3.5 0 0 1 0 6.6" />
    <path d="M18 14.4a6.5 6.5 0 0 1 3.5 5.6" />
  </svg>
);

export const BrandsIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M3 9.5 4.5 4h15L21 9.5" />
    <path d="M4.5 9.5V20h15V9.5" />
    <path d="M3 9.5h18" />
    <path d="M9.5 20v-5.5h5V20" />
  </svg>
);

export const DemoIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="3" y="5" width="18" height="16" rx="3" />
    <path d="M3 10h18" />
    <path d="M8 3v4M16 3v4" />
    <path d="M8.5 14.5h7" />
  </svg>
);

export const SettingsIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2.8v2.4M12 18.8v2.4M4.5 7.5l2 1.2M17.5 15.3l2 1.2M4.5 16.5l2-1.2M17.5 8.7l2-1.2" />
  </svg>
);

export const SignOutIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3" />
    <path d="M10 8l-4 4 4 4" />
    <path d="M6 12h9" />
  </svg>
);

export const SearchIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="M16 16l4.5 4.5" />
  </svg>
);

export const DownloadIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M12 4v11" />
    <path d="M7.5 10.5 12 15l4.5-4.5" />
    <path d="M5 19h14" />
  </svg>
);

export const ChevronDownIcon = (props) => (
  <svg {...base} {...props}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const ChevronLeftIcon = (props) => (
  <svg {...base} {...props}>
    <path d="m14 6-6 6 6 6" />
  </svg>
);

export const ChevronRightIcon = (props) => (
  <svg {...base} {...props}>
    <path d="m10 6 6 6-6 6" />
  </svg>
);

export const SortIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M8 5v14" />
    <path d="m4.5 8.5 3.5-3.5 3.5 3.5" />
    <path d="M16 19V5" />
    <path d="m12.5 15.5 3.5 3.5 3.5-3.5" />
  </svg>
);

export const ArrowUpIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M12 19V5" />
    <path d="m6 11 6-6 6 6" />
  </svg>
);

export const ArrowDownIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M12 5v14" />
    <path d="m6 13 6 6 6-6" />
  </svg>
);

export const MenuIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CloseIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export const CheckIcon = (props) => (
  <svg {...base} {...props}>
    <path d="m5 13 4.5 4.5L19 7" />
  </svg>
);

export const RefreshIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M20 12a8 8 0 1 1-2.6-5.9" />
    <path d="M20 4v4.5h-4.5" />
  </svg>
);

export const MailIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="3" y="5" width="18" height="14" rx="3" />
    <path d="m4 7.5 8 5.5 8-5.5" />
  </svg>
);

export const LinkIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M10 13.5a3.5 3.5 0 0 0 5 0l3-3a3.54 3.54 0 0 0-5-5l-1 1" />
    <path d="M14 10.5a3.5 3.5 0 0 0-5 0l-3 3a3.54 3.54 0 0 0 5 5l1-1" />
  </svg>
);
