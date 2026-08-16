# abelozerov.com

Personal site — statically exported Next.js app (App Router, Chakra UI),
served from GitHub Pages at [abelozerov.com](https://abelozerov.com).
Requires Node >= 20.9.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to out/
npm run lint
```

## Deploy

```bash
npm run deploy
```

Builds, then force-pushes `out/` to the `gh-pages` branch, which GitHub Pages
serves at the custom domain.

Deploy publishes your working tree from whatever branch you're on, and there's
no CI — check out `main` first.
