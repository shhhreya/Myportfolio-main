import React from "react";

export default function Button({
  children,
  type = "button",
  className = "",
  ...props
}) {
  return (
    <button
      className={`px-1 md:px-4 py-1.5 md:py-2 text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
