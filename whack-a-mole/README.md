# 🕹️ Whac-A-Mole Game (HTML, CSS, JavaScript)

A fun little browser-based **Whac-A-Mole** game built using plain HTML, CSS, and JavaScript.  
The project includes an animated front page and a simple interactive game where you score points by clicking the mole that appears randomly in different holes.

---

## 🎮 Features
- Animated intro screen with “Start Game” button  
- Interactive game board with 6 mole pits  
- Random mole pop-up logic using JavaScript  
- Real-time scoring system  
- Restart and Exit buttons  
- Simple, responsive UI

---

## 🧱 Project Structure

```
📂 Project Folder
├── index.html        # Front page with start button
├── game.html         # Main game interface
├── style.css         # Styles for front page
├── style1.css        # Styles for game page
├── app.js            # Script for front page animation and navigation
├── app1.js           # Main game logic and event handling
└── resources/
    ├── mole-front.jpg
    ├── mole-nopit.png
    └── pit.jpg
```

---

## 🚀 How to Run

1. **Download or clone** the project:
   ```bash
   git clone https://github.com/yourusername/whac-a-mole.git
   ```

2. **Open `index.html`** in your browser.

3. Click **“Start The Game”** once the intro animation finishes (about 5 seconds).

4. Try to **hit the mole** when it pops up to gain points — but be careful, missing it will reduce your score!

---

## 🧠 How It Works

- `app.js` handles the **front page animation** and navigates to the game.
- `app1.js` handles:
  - Random mole generation every 1.25 seconds  
  - Score tracking and updating on each click  
  - Restart & Exit functionality
- The mole image position is controlled with CSS using `.up` class toggling.

---

## 🖌️ Technologies Used
- **HTML5** — structure
- **CSS3** — styling & animation
- **Vanilla JavaScript (ES6)** — logic and interactivity

---

## 📸 Preview
🎨 Front page → 🕹️ Game board → 🧾 Scoreboard updates live!

---

## 📜 Future Improvements
- Add game timer  
- Include sound effects for hits/misses  
- Add increasing difficulty levels  
- Store high scores using localStorage  

---

## 🧑‍💻 Author
**Rashmi Naik**  
A simple project made for fun and learning JavaScript interactivity!
