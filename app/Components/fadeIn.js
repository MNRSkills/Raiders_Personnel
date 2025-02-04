"use client";

import { useRef, useState, useEffect } from "react";

export default function FadeInSection({ children }) {
  const domRef = useRef(null);
  console.log(domRef, "DOMREF");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Optionally, unobserve if you only need the effect once:
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.9 } // Adjust this threshold as needed
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    // Clean up the observer on component unmount
    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-opacity duration-5000 ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
