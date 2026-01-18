# 🎲 Dice App PWA

A fun interactive 3D dice rolling app built as a Progressive Web App (PWA) with offline support.

## ✨ Features

- **3D Dice Animation**: Realistic rolling animation with CSS 3D transforms
- **PWA Support**: Install on any device (iOS, Android, Desktop)
- **Offline First**: Works completely offline after first visit
- **Responsive Design**: Optimized for all screen sizes
- **Type-Safe**: Built with TypeScript for reliability

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Styling
- **Shadcn UI** - UI Components
- **vite-plugin-pwa** - PWA functionality with Workbox
- **React Router** - Client-side routing
- **Lucide React** - Icons

## 📦 Installation

```bash
# Install dependencies
npm install
```

## 🚀 Development

### Local Development

```bash
npm start
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Preview

```bash
# Build and preview production version
npm run build
npm run preview
```

### Live Demo

The app is deployed and available at: **[https://matf8.github.io/Dice/](https://matf8.github.io/Dice/)**

To install as PWA on iOS:
1. Open the link in Safari
2. Tap **Share** button
3. Select **"Add to Home Screen"**
4. Open the installed app

## 📜 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🏗️ Project Structure

```
dice-app/
├── public/              # Static assets
|   ├── dice.png         # Favicon 
│   ├── dice-180.png     # iOS home screen icon
│   ├── dice-192.png     # PWA icon (192x192)
│   ├── dice-512.png     # PWA icon (512x512)
│   └── manifest.json    # PWA manifest
├── src/
│   ├── components/      # React components
│   │   ├── Controls/    # Roll & reset buttons
│   │   ├── Dice3D/      # 3D dice visualization
│   │   ├── History/     # Roll history list
│   │   └── ui/          # Reusable UI components
│   ├── hooks/           # Custom React hooks
│   │   ├── useDice.ts   # Dice state management
│   │   └── useLocalStorage.ts
│   ├── Pages/           # Page components
│   ├── routes/          # React Router config
│   ├── types/           # TypeScript types
│   └── lib/             # Utilities
├── vite.config.ts       # Vite & PWA configuration
└── package.json
```

## 🔧 PWA Configuration

The app uses `vite-plugin-pwa` with:

- **Service Worker**: Precaches all assets for offline use
- **Manifest**: Configures app name, icons, theme colors
- **Navigation Fallback**: Routes to index.html when offline
- **Cache Strategy**: CacheFirst for static assets

### Manifest Details

- **Name**: Dice App
- **Short Name**: Dice
- **Theme Color**: `#4b5563` (gray-600)
- **Display**: `standalone` (full-screen app experience)
- **Icons**: 180x180, 192x192, 512x512 (with maskable variants)

## 🌐 Deployment

### GitHub Pages (Automatic)

The app automatically deploys to GitHub Pages on every push to `main`:

1. Push your changes: `git push origin main`
2. GitHub Actions builds and deploys to `gh-pages` branch
3. App is live at: `https://matf8.github.io/Dice/`

### Manual Deployment to Other Platforms

Deploy the `dist/` folder to any static hosting service:

- **Vercel**: `vercel --prod`
- **Netlify**: Drag & drop `dist/` folder
- **Cloudflare Pages**: Connect your repository

Ensure your hosting service serves with HTTPS for full PWA functionality.

## 🎨 Customization

### Changing Dice Images

Replace the images in `src/assets/` with your own dice faces. Update references in `Dice3D.tsx`.

### Adjusting Theme

Edit colors in `vite.config.ts` (PWA theme) and Tailwind classes in components.

### Adding New Dice Actions

Update the `DICE_ACTIONS` object in `src/types/dice.ts` with new action strings and emojis.

## 📱 iOS Installation Tips

- **HTTPS Required**: iOS only installs PWAs from HTTPS sites (production site or local preview with HTTPS)
- **Clear Cache**: If icon doesn't appear, clear Safari data in Settings
- **Status Bar**: Configured to match app theme (`black`)
- **Home Screen**: Uses `dice-180.png` as the icon

## 🐛 Troubleshooting

### Icon shows as "D" on iOS

- Ensure you're using HTTPS (production domain)
- Clear Safari cache: Settings → Safari → Clear History and Website Data
- Reinstall the app after clearing cache

### App doesn't work offline

- Make sure Service Worker is registered (check DevTools → Application → Service Workers)
- Rebuild with `npm run build` to refresh the precache manifest
- Use `preview` mode, not `start` (dev mode doesn't register SW properly)

### 404 errors on GitHub Pages

- Ensure base path is set to `/Dice/` in `vite.config.ts`
- Verify GitHub Pages is serving from `gh-pages` branch
- Check that the build completed successfully in GitHub Actions

## 📄 License

MIT

## 👨‍💻 Author

Mathias Fernandez

---

Built with ❤️ using React, TypeScript, and Vite
