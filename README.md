# el-Qa3da

A social party game app in Arabic. Play with friends, host games, and start the fun — no accounts, no setup.

## Tech Stack

- **Framework**: Next.js 16.3.4
- **Language**: TypeScript
- **UI**: React 19, Tailwind CSS v4
- **State**: Zustand with persistence
- **PWA**: Serwist for offline support

## Features

- **Players**: Add/remove players, persistent across sessions
- **Games**: 
  - *أمير الظلام* (Werewolf/Mafia) — deduction game with hidden roles
  - *كافيه الألعاب* (Casino) — quiz & challenge game, first to 10 points wins
  - *بكاسة* — coming soon
- **Topics**: Random conversation topics with shuffle
- **Challenges**: Quick prompts to spark discussion
- **Guides**: Detailed rules for each game mode

## Running Locally

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## PWA Install

The app is a Progressive Web App. Visit the site on Chrome/Android and click "Install" to add it to your home screen. Works offline thanks to Serwist.

## Changelog Summary

| Version | Changes |
|---------|---------|
| **1.0.0** | Initial commit — basic setup |
| **1.1.0** | Zad edition — added core features |
| **1.2.0** | El-Qa3da V1.1.0 — more pages |
| **1.3.0** | Finished Casino game + players system + topics + guides |
| **1.4.0** | Current — casino al-al3ab + download modal + about & download pages |