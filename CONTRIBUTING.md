# Contributing

## Development

Install dependencies with `pnpm install`, then run `pnpm dev`. The package watcher and docs application run together.

Before opening a pull request, run:

```sh
pnpm check
```

## Adding a component

1. Create the component, styles, and tests under `packages/react/src`.
2. Export the public API from `packages/react/src/index.ts`.
3. Add an example to `apps/docs`.
4. Run `pnpm changeset` when consumers will observe the change.

Use complete, statically detectable Tailwind class names. For prop-driven variants, map each prop value to a complete class string instead of constructing class names dynamically.

Use a patch changeset for compatible fixes, a minor changeset for backward-compatible features, and a major changeset for breaking changes.

## Pull requests

- Keep public props typed and documented.
- Preserve keyboard and screen-reader behavior.
- Test behavior rather than implementation details.
- Do not commit generated `dist`, `coverage`, or Turbo cache files.
