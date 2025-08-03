"use client";

import React, { useEffect, useState } from "react";

import { ScrollTopIcon } from "../../components/svgs";
import { cn } from "../../lib/utils";

type Props = {
  className?: string;
  limitPageYOffset?: number;
};

const ScrollToTop: React.FC<Props> = ({ className, limitPageYOffset }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    const newLimitPageYOffset = limitPageYOffset || 300;
    if (window.pageYOffset > newLimitPageYOffset) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={cn(
            "fixed bottom-6 right-6 z-50 transform rounded-full",
            className,
          )}
          aria-label="Scroll to top"
        >
          <ScrollTopIcon />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
