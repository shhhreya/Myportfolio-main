import React from "react";

function Container({ children, className = " ", width = "w-full" }) {
  return (
    <div className={`${className} ${width} max-w-7xl mx-auto px-2 md:px-4 `}>
      {children}
    </div>
  );
}

export default Container;
