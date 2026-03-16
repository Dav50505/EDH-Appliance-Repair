import type { ReactNode } from "react";

type ApplianceIconProps = {
  appliance: string;
  className?: string;
};

function IconFrame({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

export function ApplianceIcon({ appliance, className }: ApplianceIconProps) {
  const sharedProps = {
    className: className ?? "h-6 w-6",
    "aria-hidden": true,
  } as const;

  switch (appliance) {
    case "Refrigerator":
      return (
        <div {...sharedProps}>
          <IconFrame>
            <rect x="13" y="6" width="22" height="36" rx="4" />
            <path d="M13 22h22" />
            <path d="M20 14v5" />
            <path d="M20 27v6" />
          </IconFrame>
        </div>
      );
    case "Freezer":
      return (
        <div {...sharedProps}>
          <IconFrame>
            <rect x="12" y="9" width="24" height="30" rx="4" />
            <path d="M20 14v20" />
            <path d="M28 14v20" />
            <path d="m24 16 2.5 4.5H21.5L24 25l-2.5 4.5h5L24 34" />
          </IconFrame>
        </div>
      );
    case "Oven":
      return (
        <div {...sharedProps}>
          <IconFrame>
            <rect x="10" y="9" width="28" height="30" rx="4" />
            <path d="M10 17h28" />
            <circle cx="17" cy="13" r="1.25" />
            <circle cx="24" cy="13" r="1.25" />
            <circle cx="31" cy="13" r="1.25" />
            <rect x="16" y="22" width="16" height="11" rx="2" />
          </IconFrame>
        </div>
      );
    case "Cooktop":
      return (
        <div {...sharedProps}>
          <IconFrame>
            <rect x="10" y="13" width="28" height="22" rx="4" />
            <circle cx="19" cy="21" r="3.5" />
            <circle cx="29" cy="21" r="3.5" />
            <circle cx="19" cy="29" r="3.5" />
            <circle cx="29" cy="29" r="3.5" />
          </IconFrame>
        </div>
      );
    case "Range":
      return (
        <div {...sharedProps}>
          <IconFrame>
            <rect x="12" y="7" width="24" height="34" rx="4" />
            <path d="M12 15h24" />
            <circle cx="18" cy="11.5" r="1.1" />
            <circle cx="24" cy="11.5" r="1.1" />
            <circle cx="30" cy="11.5" r="1.1" />
            <rect x="17" y="21" width="14" height="14" rx="2" />
          </IconFrame>
        </div>
      );
    case "Dishwasher":
      return (
        <div {...sharedProps}>
          <IconFrame>
            <rect x="11" y="8" width="26" height="32" rx="4" />
            <path d="M11 16h26" />
            <circle cx="18" cy="12" r="1.1" />
            <circle cx="24" cy="12" r="1.1" />
            <circle cx="30" cy="12" r="1.1" />
            <path d="M18 27h12" />
            <path d="M16 31h16" />
          </IconFrame>
        </div>
      );
    case "Trash Compactor":
      return (
        <div {...sharedProps}>
          <IconFrame>
            <rect x="13" y="9" width="22" height="30" rx="4" />
            <path d="M18 9v-2h12v2" />
            <path d="M17 17h14" />
            <path d="M20 22h8" />
            <path d="M17 28h14" />
            <path d="M24 17v11" />
          </IconFrame>
        </div>
      );
    case "Washer":
      return (
        <div {...sharedProps}>
          <IconFrame>
            <rect x="11" y="8" width="26" height="32" rx="4" />
            <path d="M11 16h26" />
            <circle cx="18" cy="12" r="1.1" />
            <circle cx="24" cy="12" r="1.1" />
            <circle cx="30" cy="12" r="1.1" />
            <circle cx="24" cy="28" r="7" />
            <path d="M21 28c1.3-2 4.7-2 6 0" />
          </IconFrame>
        </div>
      );
    case "Dryer":
      return (
        <div {...sharedProps}>
          <IconFrame>
            <rect x="11" y="8" width="26" height="32" rx="4" />
            <path d="M11 16h26" />
            <circle cx="18" cy="12" r="1.1" />
            <circle cx="24" cy="12" r="1.1" />
            <circle cx="30" cy="12" r="1.1" />
            <circle cx="24" cy="28" r="7" />
            <path d="m21.5 31 2-6 2.5 4 1.5-3 1.5 5" />
          </IconFrame>
        </div>
      );
    case "Over-the-Range Microwave":
      return (
        <div {...sharedProps}>
          <IconFrame>
            <rect x="8" y="12" width="32" height="18" rx="4" />
            <rect x="13" y="16" width="13" height="10" rx="2" />
            <path d="M31 17h4" />
            <path d="M31 21h4" />
            <path d="M15 34h18" />
            <path d="M12 38h24" />
          </IconFrame>
        </div>
      );
    default:
      return (
        <div {...sharedProps}>
          <IconFrame>
            <rect x="11" y="10" width="26" height="28" rx="4" />
            <path d="M17 16h14" />
            <path d="M17 22h14" />
            <path d="M17 28h9" />
          </IconFrame>
        </div>
      );
  }
}
