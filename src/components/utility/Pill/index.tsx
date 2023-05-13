import React from "react";

interface PillType {
  className?: string;
  label: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  color?: "default" | "orange" | "green" | "pink";
}
const Pill = ({
  label,
  icon,
  iconPosition = "left",
  color = "default",
  className,
}: PillType) => {
  const pillColors = {
    default: "bg-neutral-200 text-neutral-900",
    primary: "bg-primary-200 text-primary-700",
    secondary: "bg-secondary-300 text-secondary-700",
    success: "bg-success-100 text-success-700",
    error: "bg-error-100 text-error-700",
    warn: "bg-warning-100 text-warning-700",
    info: "bg-info-100 text-info-700",
    orange: "bg-accent-orange-200 text-accent-orange-700",
    green: "bg-accent-green-200 text-accent-green-700",
    pink: "bg-accent-pink-200 text-accent-pink-700",
  };
  return (
    <div
      className={[
        "flex items-center gap-2 px-4 py-1 rounded-lg w-fit h-fit transition-all duration-150 ease-in-out",
        pillColors[color],
        className,
      ].join(" ")}
    >
      {icon && iconPosition === "left" && <span>{icon}</span>}
      <span className="whitespace-nowrap font-semibold">{label}</span>
      {icon && iconPosition === "right" && <span>{icon}</span>}
    </div>
  );
};

export default Pill;
