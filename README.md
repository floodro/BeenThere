# Been There

**Ask the questions you'd never ask out loud.**

Been There is an anonymous space where young people can ask the faith questions they're afraid to ask in church. Verified mentors who have been through the same struggle answer them.

Built for **#HackLaguna 2026** with **Quest Laguna**.

> This is a clickable prototype. It has no backend: mentor login is simulated and saved in the browser.

---

## What's inside

| Part | URL | What it does |
| --- | --- | --- |
| Anonymous forum | `/forum/` | Ask a question with no account. Filter posts by All / Sensitive / Wholesome and by topic. Posts with profanity are blocked before they go live. |
| Post page | `/forum/post/` | Verified mentor answers, anonymous comments, community-style fact checks, and "I've wondered this too". |
| Mentor portal | `/mentors/` | Mentor log in and sign up, with the church verification steps. |
| Mentor dashboard | `/mentors/dashboard/` | Questions matched to the mentor's own experiences, urgent care cases, fact checks, and blocked posts. |
| Pitch deck | `/presentation/slides.html` | The pitch deck as a web page. A PDF and an editable PowerPoint are in `presentation/`. |

---

## How to run it

The pages are plain HTML, CSS and JavaScript, so there's nothing to install or build. You only need a small local web server.

### 1. Install Python (if you don't have it)

Check with:

```bash
python --version
```

If the command isn't found, install Python 3 from [python.org](https://www.python.org/downloads/). On macOS or Linux the command may be `python3`.

### 2. Start the server from the project folder

Run this in the folder that contains `forum`, `mentors` and `assets`:

```bash
python -m http.server 8765
```

### 3. Open it in your browser

- Forum: http://localhost:8765/forum/
- Mentor portal: http://localhost:8765/mentors/
- Dashboard with a sample mentor already logged in: http://localhost:8765/mentors/dashboard/?demo=1
- Pitch deck: http://localhost:8765/presentation/slides.html

Press `Ctrl+C` in the terminal to stop the server.

### Tips

- **Use the server.** Opening the HTML files directly by double-clicking won't work, because the pages load shared files from `/assets/`.
- **Port already in use?** Pick another number, for example `python -m http.server 8000`, and change the port in the links.
- **Mentor login:** any email and a password of 6 or more characters works. Click **Log out** on the dashboard to reset it.
- **Offline:** everything works without internet, except the Nunito font, which falls back to a system font.

---

## Try these in the demo

1. **Profanity blocking.** On the forum, type a question with a swear word (English or Tagalog). The post button is disabled and you're asked to rephrase.
2. **Filters.** Switch between All, Sensitive and Wholesome, then pick a topic like Doubt or Mental health.
3. **Two kinds of replies.** Open a post to see verified mentor answers with their "Been there" story, then anonymous comments with a fact-check note.
4. **Mentor sign-up.** On `/mentors/`, go to **Sign up**, pick what you've been through, and submit. Click **Prototype: approve me** to open a dashboard matched to your experiences.

---

## Project structure

```
.
├── index.html              # redirects to /forum/
├── assets/
│   ├── app.css             # shared styles (Quest Laguna colors)
│   └── moderation.js       # profanity filter (English + Tagalog)
├── forum/
│   ├── index.html          # anonymous forum
│   └── post/index.html     # post page with answers and comments
├── mentors/
│   ├── index.html          # mentor log in / sign up
│   └── dashboard/index.html
└── presentation/
    ├── slides.html                     # pitch deck source
    ├── BeenThere - Pitch Deck.pdf
    ├── BeenThere - Pitch Deck.pptx     # editable version
    └── shots/                          # screenshots used in the deck
```

---

## Safety notes

This prototype shows the safety ideas we'd build for real:

- No private messages between mentors and young people. All answers are public.
- Posts about self-harm are blurred with a warning and flagged for trained mentors.
- Crisis lines are always visible: **988** and **NCMH 1553** (Philippines).
- Fact checks go public only when mentors from different ministries agree they're helpful.

In a real launch, mentor verification, moderation and data storage would need a proper backend.
