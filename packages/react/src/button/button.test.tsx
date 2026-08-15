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
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-busy", "true");

    await user.click(button);
    expect(handleClick).not.toHaveBeenCalled();
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
});
