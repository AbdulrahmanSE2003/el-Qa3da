# el-Qa3da

A modern, full-stack Next.js platform for Arabic social gatherings — combining challenges, topics, a Mafia-style deduction game, and spiritual content (Zad) into a single RTL-focused codebase.

![Version](https://img.shields.io/badge/version-1.3.0-blue?style=flat-square)
![Next.js](https://img.shields.io/badge/Next.js-16.3.4-black?style=flat-square&logo=nextdotjs)
![React](https://img.shields.io/badge/React-19.2.8-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.0-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-5.0.0-443e38?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

---

## 📖 Overview

**el-Qa3da** (Arabic for "the gathering") is a Next.js 16 application built for Arabic-speaking communities. The platform enables users to:

- Generate and shuffle topics and challenges for group discussions
- Play **amir-el-zalam** — a full Mafia-style deduction game with 7 phases, roles (mafia/police/doctor/civilian), and win conditions
- Browse spiritual content and reminders (Zad)
- Manage participant lists with persistent state
- Switch between light/dark themes with custom CSS variable palettes

The application is **RTL-first** by design, using Arabic language direction, right-aligned layouts, and a custom color palette (`--ink`, `--paper`, `--copper`, `--steam`) crafted for the Arabic aesthetic.

### Core Features

- **Content Decks** — Shufflable arrays for topics, challenges, sheikh questions, and zad cards using the `createContentDeck` utility
- **Phase-based Gameplay** — Mafia game progresses through structured phases: Role Setup → Role Reveal → Night Phases → Discussion → Elimination → Game Finish
- **Theme System** — 3 configurable themes (dark, sepia, copper) mapped to Tailwind CSS custom properties
- **Player Management** — Add/remove players with zustand persistence; display lists with search and empty states
- **PWA Support** — Service worker generated via @serwist/next for offline functionality
- **Full Test Suite** — 385+ lines validating game mechanics, role rules, and phase transitions

---

## 🛠 Tech Stack

| Category             | Technologies                                  |
| -------------------- | --------------------------------------------- |
| **Framework**        | Next.js 16.3.4 (App Router, RSC enabled)      |
| **Language**         | TypeScript 5.4 (strict mode)                  |
| **UI Components**    | shadcn/ui (radix-maia, RTL supported)         |
| **Styling**          | Tailwind CSS 3.4.4 (CSS variables, dark mode) |
| **State Management** | Zustand 5.0.15 (with persist middleware)      |
| **Icons**            | Lucide React 0.400.0                          |
| **Animations**       | Framer Motion 13.4.0                          |
| **PWA**              | @serwist/next 9.5.12                          |
| **Testing**          | Jest + React Testing Library (385 test lines) |
| **Package Manager**  | pnpm 10+                                      |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 20.0.0
- **pnpm** ≥ 10.0.0

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/el-qa3da/el-qa3da.git
cd el-qa3da

# 2. Install dependencies
pnpm install

# 3. Configure environment variables
# No .env files are required for the current feature set.
# The only process.env usage is NODE_ENV in next.config.ts.

# 4. Start the development server
pnpm dev
```

The application will be available at `http://localhost:3000`.

### Available Scripts

| Script           | Description                                                    |
| ---------------- | -------------------------------------------------------------- |
| `pnpm dev`       | Start Next.js in development mode with hot reloading           |
| `pnpm build`     | Produce a production build (`next build --webpack`)            |
| `pnpm start`     | Run the production build locally                               |
| `pnpm lint`      | Run ESLint to check for code quality issues                    |
| `pnpm format`    | Format files with Prettier (Tailwind-aware)                    |
| `pnpm typecheck` | Run TypeScript type checking (`tsc --noEmit`)                  |
| `pnpm test`      | Execute the Jest test suite                                    |
| `pnpm changelog` | Generate CHANGELOG from commit messages (conventional commits) |

---

## 📁 Project Structure

```text
/
├── app/                    # Next.js App Router pages & layouts
│   ├── layout.tsx          # Root layout (RTL, fonts, ThemeProvider)
│   ├── page.tsx            # Home dashboard
│   ├── games/              # Game hub & amir-el-zalam phases
│   ├── challenges/         # Dynamic challenge deck
│   ├── topics/             # Rotating topic generator
│   ├── sheikh/             # Sheikh selection & questions phase
│   ├── players/            # Player management page
│   ├── zad/                # Spiritual content cards
│   └── more/               # About, developer, support
├── features/               # Feature modules (challenges, games, players, etc.)
│   ├── challenges/ChallengesSection.tsx
│   ├── games/amir-el-zalam/    # 7-phase Mafia game
│   ├── games/data/games.ts     # Game definitions
│   ├── players/Players.tsx     # Add/remove players
│   └── ...                     # Other feature directories
├── lib/                    # Core utilities
│   ├── constants.ts          # Activity cards & constants
│   ├── create-content-deck.ts  # Content deck shuffling utility
│   ├── gameTheme.ts          # Theme CSS variable mappings
│   └── Guides.tsx            # In-app guidance documentation
├── components/             # Shadcn/ui components & overrides
│   └── ui/                   # Button, Card, Input, etc.
├── store/                  # Zustand stores (party-store.ts)
├── scripts/                # Dev scripts & helpers
├── scripts/                # Dev scripts & helpers
├── tailwind.config.mjs     # Tailwind CSS v4 configuration
├── postcss.config.mjs      # PostCSS plugins
├── components.json         # shadcn/ui configuration (RTL, baseColor: stone)
├── tsconfig.json           # TypeScript strict configuration
├── next.config.ts          # Next.js config (PWA, SWR dev origins)
├── .github/                # CI/CD and automation workflows
└── .next/                  # Next.js build output (gitignored)
```

---

## ⚙️ Environment Variables

The application does **not** require `.env` files for core functionality. The only environment variable used is:

| Variable   | Description                            | Default                            |
| ---------- | -------------------------------------- | ---------------------------------- |
| `NODE_ENV` | Controls SWR service worker activation | `development` (sw disabled in dev) |

**No `.env.example` is provided** — all features work with default configuration. If you need to add external API keys or database connections, create a `.env` file in the root with appropriate variables.

---

## 📦 Versioning

This project follows **Semantic Versioning** (`MAJOR.MINOR.PATCH`).

- **Current version:** `0.0.1`
- Releases are published to the npm registry and tagged in Git.
- Commit messages should follow **Conventional Commits** format to enable automated changelog generation via `pnpm changelog`.

---

## 🤝 Contributing

1. **Fork** the repository and create a branch from `main` (e.g., `feat/players-search` or `fix/game-phase-bug`).
2. **Code** — add your feature or fix, ensuring all new tests pass (`pnpm test`).
3. **Lint** — run `pnpm lint` to verify code style.
4. **Format** — run `pnpm format` to format with Prettier.
5. **Commit** — use descriptive messages in the format: `feat: add player search` or `fix: resolve role reveal timing`.
6. **Push** and open a **Pull Request**; maintainers will review and merge.

All PRs must pass CI (lint, typecheck, test) before merging.

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

---

## 👨‍💻 Author

**Abdulrahman Saeed** — [GitHub](https://github.com/AbdulrahmanSE2003/el-Qa3da) · [Portfolio](https://mnmlst-dev.vercel.app)

---

## 📬 Contact

- **Issues:** [GitHub Issues](https://github.com/AbdulrahmanSE2003/el-Qa3da/issues)
