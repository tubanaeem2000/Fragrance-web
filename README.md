# Musk e Dil — Velvet Oud website

One-page luxury store: React + Vite + Tailwind CSS + Lucide icons.
The cart works in the browser and orders are sent to WhatsApp (no payment gateway).

---

## 1. One-time setup

1. Install **Node.js LTS** (version 18 or newer) from https://nodejs.org. Use the default options.
2. Check it worked. Open **Command Prompt** (Windows) or **Terminal** (Mac) and run:
   ```
   node -v
   npm -v
   ```
   Both should print a version number.
3. Unzip `musk-e-dil-website.zip`, e.g. to `Desktop\musk-e-dil`.

## 2. Run it on your computer

```
cd Desktop\musk-e-dil        (Mac: cd ~/Desktop/musk-e-dil)
npm install                  (first time only — takes a minute)
npm run dev
```

Open **http://localhost:5173** in your browser.
While `npm run dev` is running, every file you save updates the browser instantly.
Press `Ctrl + C` in the terminal to stop it.

> Tip: in VS Code, use *File → Open Folder* → `musk-e-dil`, then *Terminal → New Terminal* and run the commands there.

## 3. Edit your store — `src/config.js`

| What | Where in `src/config.js` |
|---|---|
| Price (PKR) | `PRODUCT_PRICE = 0` → e.g. `3500`. While 0, the site shows "Price on request" |
| WhatsApp number | `WHATSAPP_NUMBER = '923167897838'` (no `+`, no spaces) |
| Email | `CONTACT_EMAIL` |
| Instagram / TikTok / Facebook | `SOCIAL_LINKS` — replace each `'#'` with your profile URL |
| Hero carousel slides | `slides` list — reorder, remove, or add slides; change names/lines |
| Product photos | `product.gallery` |

**Replacing a photo:** put the new image in `src/assets/` with the *same file name* — done.
**Adding a slide:** copy the image into `src/assets/`, add an `import` line at the top of `config.js`, and add an entry to `slides`.
- `focus` — the part of the photo to keep in view, e.g. `'60% 50%'` (left→right, top→bottom)
- `shift` — on desktop, pushes the photo right so the text doesn't cover the bottle (try 0–30)
- `action` — `'shop'` shows Shop Now buttons, `'enquire'` shows a WhatsApp enquiry button

## 4. Put it online

```
npm run build
```
This creates a **`dist`** folder — that's your finished website.

**Easiest (free): Netlify Drop**
1. Go to https://app.netlify.com/drop and sign in.
2. Drag the `dist` folder onto the page. You get a live link in seconds.
3. To update later: run `npm run build` again and drag the new `dist` folder onto your site's *Deploys* page.

**Other options**
- **Vercel** (https://vercel.com): push the project to GitHub → *Add New Project* → import it. Vercel detects Vite automatically (build: `npm run build`, output: `dist`).
- **Hostinger / cPanel hosting:** upload everything *inside* `dist` to `public_html`.
- **Custom domain** (e.g. muskedil.pk): add it in your host's *Domain settings* and follow its DNS steps.

**Single-file version:** `npm run build:single` creates `dist-single/index.html` — one file with all images inside it, handy for sharing or simple hosting.

## 5. Troubleshooting

- **`npm` is not recognized** → restart the terminal (or PC) after installing Node.js.
- **Port 5173 already in use** → Vite automatically uses the next one (5174…); open the link it prints.
- **Something looks broken after editing** → check the terminal for a red error; it names the file and line.
- **WhatsApp opens but no message** → make sure `WHATSAPP_NUMBER` contains only digits starting with `92`.
