# Pookie

A pnpm monorepo for a typed, tested, npm-ready React component library.

## What's included

- `packages/react`: the publishable `@glitchednexus/pookie` package
- `apps/docs`: a Vite-powered local documentation and component playground
- Tailwind CSS, TypeScript, ESLint, Prettier, Vitest, Testing Library, tsup, and publint
- Changesets for versioning and changelogs
- GitHub Actions for CI, dependency updates, release pull requests, and npm publishing
- ESM and CommonJS builds, declarations, source maps, and an explicit stylesheet export

## Requirements

- Node.js 22.14 or newer (Node 24 is recommended)
- pnpm 11

Corepack can install the exact package-manager version declared by this repository:

```sh
corepack enable
pnpm install
```

## Commands

```sh
pnpm dev             # watch the package and run the docs app
pnpm check           # formatting, linting, types, tests, builds, and package validation
pnpm test:coverage   # generate library test coverage
pnpm changeset       # describe a releasable change
```

## Consuming the package

```sh
pnpm add @glitchednexus/pookie
```

```tsx
import { Button } from "@glitchednexus/pookie";
import "@glitchednexus/pookie/styles.css";

export function Example() {
  return <Button>Save changes</Button>;
}
```

The published stylesheet contains precompiled Tailwind utilities and omits Preflight. Consumers do not need to install or configure Tailwind.

## Publishing setup

The release workflow uses Changesets and npm trusted publishing (OIDC), so routine releases do not need a long-lived npm token.

Before the first automated release:

1. Confirm that the `@glitchednexus` npm scope exists and that you can publish to it. Change the package name and repository metadata if you want a different scope.
2. If this is a brand-new npm package, publish its first version from a trusted maintainer account with `pnpm --filter @glitchednexus/pookie publish --access public`. npm only exposes package-level trusted-publisher settings after the package exists.
3. In the package settings on npm, configure a GitHub Actions trusted publisher for `GlitchedNexus/pookie` and the workflow filename `release.yml`, allowing `npm publish`.
4. In GitHub, protect `main`, require the CI checks, and limit who can merge the Changesets release pull request.

For each releasable pull request, run `pnpm changeset` and commit the generated markdown file. Merging changesets into `main` updates a release pull request. Merging that release pull request publishes the new version and creates the GitHub release.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the development workflow.
