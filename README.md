# Random Terminal 

A simple Node.js script that fills your terminal with a full-screen grid of random characters in random colors. It continuously refreshes the screen to create a dynamic visual effect.

---

## Features

* Fills the entire terminal screen
* Random characters (numbers, symbols, letters)
* Random colors for each character
* Continuous animation
* Lightweight and fast

---

## Installation

Make sure Node.js is installed:

```bash
node -v
```

Clone the repository:

```bash
git clone https://github.com/your-username/random-terminal-chaos.git
cd random-terminal-chaos
```

---

## Usage

Run the script:

```bash
node color_grid.js
```

---

## Stop the script

Press:

```bash
CTRL + C
```

---

## Notes

* Recommended terminals:

  * Windows Terminal
  * VS Code Terminal

* Older CMD versions may not fully support ANSI colors

* The script continuously writes to the terminal, which may increase CPU usage or cause lag on slower systems

---

## How it works

* Detects terminal size using:

  * `process.stdout.columns`
  * `process.stdout.rows`
* Generates random characters
* Applies ANSI color codes
* Clears and redraws the screen in a loop

---

## Possible Improvements

* Matrix-style falling effect
* Adjustable speed
* Custom color themes
* Keyboard interaction
* Packaging as an npm tool

---

## License

MIT License
