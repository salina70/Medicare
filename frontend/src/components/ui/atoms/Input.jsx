import * as React from "react";
import { twMerge } from "tailwind-merge";

const Input = ({ className, leftIcon, rightIcon, ...props }, ref) => {
  return (
    <div
      className={twMerge(
        "flex h-10 items-center rounded-md border border-emerald-500 bg-transparent px-3 transition-colors",
        "focus-within:border-emerald-500",
        "focus-within:ring-2 focus-within:ring-emerald-500/20",
        className,
      )}
    >
      {leftIcon && <span className="mr-2 text-gray-500">{leftIcon}</span>}

      <input
        ref={ref}
        className="flex-1 bg-transparent outline-none placeholder:text-gray-400"
        {...props}
      />

      {rightIcon && <span className="ml-2 text-gray-500">{rightIcon}</span>}
    </div>
  );
};

Input.displayName = "Input";

export default Input;
