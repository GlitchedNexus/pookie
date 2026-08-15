# @glitchednexus/pookie

Accessible, typed React components with no runtime dependencies beyond React. Component styles are authored with Tailwind CSS and shipped as precompiled CSS, so consuming applications do not need Tailwind installed.

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

The stylesheet uses Tailwind theme properties such as `--color-pookie-accent`, `--radius-pookie-control`, and `--font-pookie-sans`, which can be overridden at the application root to match your product theme. It intentionally excludes Tailwind Preflight so importing the library does not reset consumer styles.

## React support

React 18.3 and React 19 are supported. The package ships ESM, CommonJS, and TypeScript declarations.
