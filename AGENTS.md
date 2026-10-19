<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project

- This is a single npm package (`package-lock.json`); the Next.js App Router app lives in `app/`. The `@/*` TypeScript alias maps to the repository root.
- Use `npm run dev` for development, `npm run lint` for ESLint, `npm run build` to verify a production build, and `npm start` to serve that build. No test or typecheck scripts are defined in `package.json`.
- For spec-driven work, see `.agents/skills/spec/` and `.agents/skills/spec-impl/`; the implementation workflow requires an approved spec and pauses for review after each plan step.

## Tooling

- Keep Playwright MCP artifacts (including screenshots) in `.playwright-mcp/`.
- Use the Context7 MCP for current framework documentation.
