import * as React from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        primary:
          "bg-emerald-600 text-white hover:bg-emerald-700 active:bg-emerald-800 focus-visible:ring-emerald-500",

        secondary:
          "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 focus-visible:ring-emerald-400",

        outline:
          "border border-emerald-200 bg-transparent text-emerald-700 hover:bg-emerald-50 focus-visible:ring-emerald-400",

        ghost:
          "text-emerald-700 hover:bg-emerald-50 focus-visible:ring-emerald-400",

        destructive:
          "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500",
      },

      size: {
        sm: "h-8 px-3",
        md: "h-10 px-4",
        lg: "h-12 px-6",
        icon: "h-10 w-10",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export function Button({
  className,
  variant,
  size,
  loading,
  leftIcon,
  rightIcon,
  children,
  disabled,
  ...props
}) {
  return (
    <button
      disabled={disabled || loading}
      className={twMerge(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {loading ? (
        <>Loading...</>
      ) : (
        <>
          {leftIcon}
          {children}
          {rightIcon}
        </>
      )}
    </button>
  );
}
