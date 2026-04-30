# 🎨 Background Color Generator

A simple and interactive **Background Color Generator** built using **JavaScript, HTML, and CSS**. This project allows users to dynamically change the background color of a webpage either by entering a color manually or generating a random color with a single click.

---

## 🚀 Features

* 🎯 Apply custom background colors using user input
* ⌨️ Press **Enter key** to quickly apply color
* 🎲 Generate random RGB colors instantly
* ⚠️ Basic error handling for empty input
* ⚡ Lightweight and fast — no libraries required

---

## 🖼️ Preview

> A clean UI where users can:

* Enter a color name (e.g., `red`, `blue`, `#ff5733`)
* Click "Apply" or press Enter
* Or generate a random color with one click

---

## 📂 Project Structure

```
📁 Background-Color-Generator
│── index.html
│── style.css
│── script.js
```

---

## 🧠 How It Works

### 1. 🎨 Custom Color Input

* User enters a color value in the input field
* On clicking **Apply** or pressing **Enter**, the background updates

```js
function changeBackground() {
    const colorDisplay = colorInput.value;

    if (!colorDisplay) {
        alert("Please Enter Color Name");
        return;
    }

    body.style.backgroundColor = colorDisplay;
    colorInput.value = "";
}
```

---

### 2. 🎲 Random Color Generator

* Generates random RGB values between 0–255
* Applies them directly to the background

```js
function randomColorGenerator() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let rgb = `rgb(${r}, ${g}, ${b})`;
    body.style.backgroundColor = rgb;
}
```

---

### 3. ⚡ Event Handling

* Click events for buttons
* Keyboard event for Enter key support

```js
applyDisplay.addEventListener("click", changeBackground);

colorInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        changeBackground();
    }
});

generateBtn.addEventListener("click", randomColorGenerator);
```

---

## 🛠️ Tech Stack

* **HTML5** – Structure
* **CSS3** – Styling
* **JavaScript (Vanilla)** – Logic & Interactivity

---

## 📌 Usage

1. Clone the repository

```bash
git clone https://github.com/GodCode7700/background-color-generator-js.git
```

2. Open `index.html` in your browser

3. Start experimenting with colors 🎨

---

## 💡 Ideas for Improvement

* Add **color preview box**
* Support **HEX & HSL validation**
* Add **copy-to-clipboard button**
* Store last used colors in **localStorage**
* Add smooth **transition animations**

---

## 🧑‍💻 Author

**Ankit Kumar**
Passionate about learning JavaScript & building cool projects.

---

## ⭐ Support

If you like this project:

* Give it a ⭐ on GitHub
* Share with your friends
* Keep building 🚀

---

> “Small projects build big skills.” 💡











































































































































































































































































