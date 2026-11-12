# Lumina signup

A single static signup page for Zoho PageSense testing. Submitting the form stays on this page, shows a short message at the top, and calls `window.pagesense.push(['identifyUser', email])`.

## Files

- `index.html` — signup page and the PageSense snippet
- `styles.css` — layout and the top message
- `script.js` — form handler

Open `index.html` in a browser for a local look. PageSense should track the published URL, not a `file://` page.

## Publish with GitHub Pages

1. Create a new repository on GitHub.
2. Push these files to the `main` branch: `index.html`, `styles.css`, `script.js`, and `README.md`.

```bash
git init
git add index.html styles.css script.js README.md
git commit -m "Add PageSense signup page"
git branch -M main
git remote add origin https://github.com/<user>/<repo>.git
git push -u origin main
```

3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Set the branch to `main` and the folder to `/ (root)`, then save.
6. Wait for the Pages deployment to finish. The site is at:

```text
https://<user>.github.io/<repo>/
```

7. In Zoho PageSense, add that URL as the page under test so visits and `identifyUser` calls are recorded.

There is no install step and no build command. GitHub Pages serves the files as they are.
