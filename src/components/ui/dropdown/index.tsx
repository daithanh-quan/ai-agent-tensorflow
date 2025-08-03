"use client";

import React, { useEffect, useRef, useState } from "react";

import { cn } from "src/lib/utils";

interface DropdownProps {
  trigger?: React.ReactNode | ((v: boolean) => React.ReactNode);
  children: React.ReactNode;
  wrapperClassName?: string;
  contentClassName?: string;
  position?: "bottom-left" | "bottom-right" | "top-left" | "top-right";
  disabled?: boolean;
}
const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  children,
  wrapperClassName,
  contentClassName,
  position = "bottom-left",
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (typeof document !== "undefined") {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, []);

  // Close dropdown on escape key
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (typeof window !== "undefined") {
      document.addEventListener("keydown", handleEscapeKey as any);
      return () =>
        document.removeEventListener("keydown", handleEscapeKey as any);
    }
  }, []);

  const getPositionClasses = (): string => {
    const positions = {
      "bottom-left": "top-full left-0",
      "bottom-right": "top-full right-0",
      "top-left": "bottom-full left-0 mb-2",
      "top-right": "bottom-full right-0 mb-2",
    };
    return positions[position] || positions["bottom-left"];
  };

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div
      className={cn("relative inline-block", wrapperClassName)}
      ref={dropdownRef}
    >
      <button
        onClick={handleToggle}
        disabled={disabled}
        className={`inline-flex items-center justify-center ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
        aria-expanded={isOpen}
        aria-haspopup="true"
        type="button"
      >
        {typeof trigger === "function" ? trigger(isOpen) : trigger}
      </button>
      {isOpen && (
        <div
          className={`absolute z-50 min-w-full ${getPositionClasses()} `}
          role="menu"
          aria-orientation="vertical"
        >
          <div className={cn("py-1", contentClassName)}>{children}</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
