# Surprise For Her App

An installable, cinematic love app with:
- Typed emotional letter
- Dynamic photo story cards
- Inline photo meaning panel (no popup)
- Love meter with animated reactions
- Random "why I love you" generator
- Secret vault code unlock
- Relationship timeline section
- Memory stars interaction
- Final promise reveal with floating hearts
- PWA support (installable + offline shell)
- Mobile haptic feedback on key interactions
- Confetti canvas burst on final reveal
- Per-section ambient audio layers with toggle

## 1) Add your real photos
Use this folder:

```bash
mkdir -p surprise-for-her/photos
```

Expected files:
- `surprise-for-her/photos/photo-1.jpg`
- `surprise-for-her/photos/photo-2.jpg`
- `surprise-for-her/photos/photo-3.jpg`
- `surprise-for-her/photos/photo-4.jpg`
- `surprise-for-her/photos/photo-5.jpg`
- `surprise-for-her/photos/photo-6.jpg`
- `surprise-for-her/photos/photo-7.jpg`
- `surprise-for-her/photos/photo-8.jpg`
- `surprise-for-her/photos/photo-9.jpg`
- `surprise-for-her/photos/photo-10.jpg`
- `surprise-for-her/photos/photo-11.jpg`

## 2) Personalize content
Edit `surprise-for-her/script.js` in the `config` object.

## 3) Music (optional)
Set `musicSrc` in `surprise-for-her/script.js` to your file path, for example:
- `assets/your-song.mp3`

## 4) Run it as an app
Use a local server (required for service worker + install prompt):

```bash
cd surprise-for-her
python3 -m http.server 8080
```

Then open:
- `http://localhost:8080`

To install on supported browsers, use the **Install App** button.
