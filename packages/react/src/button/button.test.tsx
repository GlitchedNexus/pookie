import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createRef } from "react";
import { describe, expect, it, vi } from "vitest";

import { Button } from "./button";

describe("Button", () => {
  it("renders as a non-submitting button by default", () => {
    render(<Button>Save changes</Button>);

    expect(
      screen.getByRole("button", { name: "Save changes" }),
    ).toHaveAttribute("type", "button");
  });

  it("calls the click handler", async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(<Button onClick={handleClick}>Continue</Button>);
    await user.click(screen.getByRole("button", { name: "Continue" }));

    expect(handleClick).toHaveBeenCalledOnce();
  });

  it("disables interaction and exposes its loading state", async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(
      <Button isLoading loadingText="Saving" onClick={handleClick}>
        Save
      </Button>,
    );

    const button = screen.getByRole("button", { name: "Saving" });
    expect(button).not.toBeDisabled();
    expect(button).toHaveAttribute("aria-disabled", "true");
    expect(button).toHaveAttribute("aria-busy", "true");
    expect(button).toHaveAttribute("data-disabled", "");

    await user.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("uses a native disabled state outside loading", () => {
    render(<Button disabled>Delete</Button>);

    const button = screen.getByRole("button", { name: "Delete" });
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("data-disabled", "");
  });

  it("forwards its ref and preserves a consumer class", () => {
    const ref = createRef<HTMLButtonElement>();

    render(
      <Button
        className="product-action"
        ref={ref}
        size="large"
        variant="secondary"
      >
        Preview
      </Button>,
    );

    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    expect(ref.current).toHaveClass("product-action");
  });

  it("supports Base UI composition and keyboard interaction", async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(
      <Button nativeButton={false} onClick={handleClick} render={<div />}>
        Composed action
      </Button>,
    );

    const button = screen.getByRole("button", { name: "Composed action" });
    expect(button).toHaveAttribute("tabindex", "0");

    button.focus();
    await user.keyboard("{Enter}");

    expect(handleClick).toHaveBeenCalledOnce();
  });

  it("merges a Base UI state-aware consumer class", () => {
    render(
      <Button
        disabled
        className={(state) => (state.disabled ? "is-disabled" : undefined)}
      >
        Archive
      </Button>,
    );

    expect(screen.getByRole("button", { name: "Archive" })).toHaveClass(
      "is-disabled",
    );
  });
});
