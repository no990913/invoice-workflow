# Invoice and Billing Approval Workflow

A clean, modern static website that visualises an end-to-end invoice and billing approval process. Built with pure HTML, CSS, and JavaScript. No frameworks, no dependencies, no build tools required.

---

## Preview

> Open `index.html` with Live Server in VS Code to preview locally.

---

## 📁 Project Structure

```
invoice-workflow/
├── index.html       # Page structure and content
├── style.css        # All styling, colours, and animations
├── script.js        # Scroll reveal animation logic
└── README.md        # You are here
```

---

## Features

- **8-step workflow** - from invoice submission to payment archiving
- **Two approval tiers** - Manager (≤ $10,000) and Finance Director (> $10,000)
- **Decision gates** - clearly shows Yes/No paths at each decision point
- **Scroll reveal animations** - steps animate in as you scroll down
- **Dark mode design** - modern dark UI with gradient accents
- **Fully responsive** - works on desktop and mobile
- **Zero dependencies** - no npm, no frameworks, just plain files

---

## Getting Started

### Option 1 - Live Server (recommended for VS Code)

1. Open the project folder in **VS Code**
2. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension
3. Right-click `index.html` in the sidebar
4. Select **"Open with Live Server"**
5. Your browser will open at `http://127.0.0.1:5500`

### Option 2 - Open directly in browser

1. Download all three files into the same folder
2. Double-click `index.html`
3. It will open in your default browser

> ⚠️ Make sure `index.html`, `style.css`, and `script.js` are all in the **same folder** or the styles and animations won't load.

---

## Customisation

### Change the colour theme
Open `style.css` and edit the CSS variables at the top of the file:

```css
:root {
  --teal:   #00d4aa;   /* Primary accent */
  --accent: #6c63ff;   /* Purple accent */
  --amber:  #ffb347;   /* Warning / decision colour */
  --red:    #ff6b6b;   /* Error / rejection colour */
  --blue:   #4fc3f7;   /* Threshold block colour */
}
```

### Change the approval threshold
Search for `$10,000` in `index.html` and update the value in the two places it appears (Step 04 tags and the threshold block).

### Add or remove steps
Each step follows this HTML pattern in `index.html`:

```html
<div class="step step-N">
  <div class="step-icon">EMOJI</div>
  <div class="step-body">
    <div class="step-number">STEP 0N</div>
    <div class="step-title">Your Step Title</div>
    <div class="step-desc">Your step description goes here.</div>
    <div class="step-tags">
      <span class="tag">Tag 1</span>
      <span class="tag">Tag 2</span>
    </div>
  </div>
</div>
```

Then add a matching colour rule in `style.css`:

```css
.step-N .step-icon  { background: rgba(R, G, B, 0.1); border-color: rgba(R, G, B, 0.3); }
.step-N .step-title { color: var(--your-colour); }
```

---

## Deploying to GitHub Pages

1. Push all files to a GitHub repository
2. Go to **Settings → Pages**
3. Under **Source**, select your main branch and `/ (root)`
4. Click **Save**
5. Your site will be live at:
   ```
   https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
   ```

---

## Built With

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and content |
| CSS3 | Styling, variables, animations |
| Vanilla JavaScript | Scroll reveal (IntersectionObserver) |
| Google Fonts | Syne + DM Mono typefaces |

---

## License

This project is open source and free to use for personal or commercial purposes.

