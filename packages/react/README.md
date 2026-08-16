# @glitchednexus/pookie

Accessible, typed React components built on [Base UI](https://base-ui.com/). Pookie layers its own Tailwind CSS styles and product-level API over Base UI's unstyled, accessible primitives. Styles ship as precompiled CSS, so consuming applications do not need Tailwind installed.

## Install

```sh
npm install @glitchednexus/pookie
```

## Use

```tsx
import { Button } from "@glitchednexus/pookie";
import "@glitchednexus/pookie/styles.css";

export function Example() {
  return (
    <Button variant="primary" size="medium">
      Save changes
    </Button>
  );
}
```

Base UI composition props remain available when you need them. For example, a
button can render through another non-link element while retaining button
semantics and keyboard interaction:

```tsx
<Button render={<div />} nativeButton={false}>
  Open command palette
</Button>
```

Use an actual link when the destination is a URL; do not render a link through
`Button`.

The stylesheet uses Tailwind theme properties such as `--color-pookie-accent`, `--radius-pookie-control`, and `--font-pookie-sans`, which can be overridden at the application root to match your product theme. It intentionally excludes Tailwind Preflight so importing the library does not reset consumer styles.

## React support

React 18.3 and React 19 are supported. The package ships ESM, CommonJS, and TypeScript declarations.
