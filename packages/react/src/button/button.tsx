import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Replaces the label with an accessible loading state and disables the button. */
  isLoading?: boolean;
  /** Text announced and displayed while `isLoading` is true. */
  loadingText?: string;
  /** Controls the button's padding and minimum height. */
  size?: "small" | "medium" | "large";
  /** Controls the button's visual emphasis. */
  variant?: "primary" | "secondary";
  children: ReactNode;
}

const baseClasses =
  "inline-flex appearance-none items-center justify-center gap-2 rounded-pookie-control border font-pookie-sans leading-none font-[650] shadow-pookie-control select-none transition-[background-color,border-color,box-shadow,transform] duration-150 ease-in-out enabled:active:translate-y-px focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-pookie-focus/40 disabled:cursor-not-allowed disabled:opacity-60";

const sizeClasses = {
  small: "min-h-8 px-3 py-2 text-[0.8125rem]",
  medium: "min-h-10 px-4 py-[0.6875rem] text-[0.9375rem]",
  large: "min-h-12 px-5 py-3.5 text-base",
} satisfies Record<NonNullable<ButtonProps["size"]>, string>;

const variantClasses = {
  primary:
    "border-transparent bg-pookie-accent text-pookie-on-accent enabled:hover:bg-pookie-accent-hover",
  secondary:
    "border-pookie-border bg-pookie-surface text-pookie-text enabled:hover:bg-pookie-surface-hover",
} satisfies Record<NonNullable<ButtonProps["variant"]>, string>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      children,
      className,
      disabled = false,
      isLoading = false,
      loadingText = "Loading",
      size = "medium",
      type = "button",
      variant = "primary",
      ...props
    },
    ref,
  ) {
    const classes = [
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        {...props}
        aria-busy={isLoading || undefined}
        className={classes}
        disabled={disabled || isLoading}
        ref={ref}
        type={type}
      >
        {isLoading ? (
          <>
            <span
              aria-hidden="true"
              className="size-[0.875em] animate-spin rounded-full border-2 border-current border-r-transparent motion-reduce:[animation-duration:1400ms]"
            />
            <span>{loadingText}</span>
          </>
        ) : (
          children
        )}
      </button>
    );
  },
);
