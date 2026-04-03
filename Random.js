// color_grid.js

function getRandomChar() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;:',.<>/?";
    return chars[Math.floor(Math.random() * chars.length)];
}

// random ANSI color (foreground)
function getRandomColor() {
    const colors = [
        31, 32, 33, 34, 35, 36, // normal
        91, 92, 93, 94, 95, 96  // bright
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

function colorChar(char) {
    return `\x1b[${getRandomColor()}m${char}\x1b[0m`;
}

function generateRow() {
    const width = process.stdout.columns || 80;
    let row = "";

    for (let i = 0; i < width; i++) {
        row += colorChar(getRandomChar());
    }

    return row;
}

// animation loop
setInterval(() => {
    process.stdout.write("\x1Bc"); // clear screen

    const rows = process.stdout.rows || 24;
    for (let i = 0; i < rows; i++) {
        console.log(generateRow());
    }
}, 50);
