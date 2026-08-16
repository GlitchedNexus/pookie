"use client";

import { Button as BaseButton } from "@base-ui/react/button";
import { forwardRef, type ReactNode } from "react";

export interface ButtonProps extends BaseButton.Props {
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
  "inline-flex appearance-none items-center justify-center gap-2 rounded-pookie-control border font-pookie-sans leading-none font-[650] shadow-pookie-control select-none transition-[background-color,border-color,box-shadow,transform] duration-150 ease-in-out active:not-data-disabled:translate-y-px focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-pookie-focus/40 data-disabled:cursor-not-allowed data-disabled:opacity-60";

const sizeClasses = {
  small: "min-h-8 px-3 py-2 text-[0.8125rem]",
  medium: "min-h-10 px-4 py-[0.6875rem] text-[0.9375rem]",
  large: "min-h-12 px-5 py-3.5 text-base",
} satisfies Record<NonNullable<ButtonProps["size"]>, string>;

const variantClasses = {
  primary:
    "border-transparent bg-pookie-accent text-pookie-on-accent hover:not-data-disabled:bg-pookie-accent-hover",
  secondary:
    "border-pookie-border bg-pookie-surface text-pookie-text hover:not-data-disabled:bg-pookie-surface-hover",
} satisfies Record<NonNullable<ButtonProps["variant"]>, string>;

export const Button = forwardRef<HTMLElement, ButtonProps>(function Button(
  {
    children,
    className,
    disabled = false,
    focusableWhenDisabled,
    isLoading = false,
    loadingText = "Loading",
    size = "medium",
    type = "button",
    variant = "primary",
    ...props
  },
  ref,
) {
  const classes = (state: BaseButton.State) =>
    [
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      typeof className === "function" ? className(state) : className,
    ]
      .filter(Boolean)
      .join(" ");

  return (
    <BaseButton
      {...props}
      aria-busy={isLoading || undefined}
      className={classes}
      disabled={disabled || isLoading}
      focusableWhenDisabled={focusableWhenDisabled ?? isLoading}
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
    </BaseButton>
  );
});
