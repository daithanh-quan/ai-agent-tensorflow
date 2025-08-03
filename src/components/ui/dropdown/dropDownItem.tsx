import React from "react";

import { cn } from "@/lib/utils";

interface DropdownItemProps {
  children: React.ReactNode;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => void;
  disabled?: boolean;
  className?: string;
  href?: string;
  icon?: React.ReactNode;
}

const DropdownItem: React.FC<DropdownItemProps> = ({
  children,
  onClick,
  disabled = false,
  className = "",
  href,
  icon,
}) => {
  const baseClasses = `
    flex items-center w-full px-4 py-2 text-sm text-left text-gray-700
    hover:bg-dark-500 hover:text-light transition-colors duration-150
    ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
  `;

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    onClick && onClick(e);
  };

  if (href && !disabled) {
    return (
      <a
        href={href}
        className={cn(baseClasses, className)}
        role="menuitem"
        onClick={handleClick}
      >
        {icon && <span className="mr-3">{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={cn(baseClasses, className)}
      role="menuitem"
      type="button"
    >
      {icon && <span className="mr-3">{icon}</span>}
      {children}
    </button>
  );
};

export default DropdownItem;
