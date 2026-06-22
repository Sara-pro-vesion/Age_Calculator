# 🗓️ Age Calculator Project

A sleek, interactive age calculator component built to practice and solidify my understanding of React local state composition, form validation, and complex date mathematics.

> **Note:** This is a personal learning project, not a production-ready library. It serves as a sandbox to experiment with structural state patterns and building structured user forms in React.

---

## 🎯 Learning Objectives

This project was built specifically to master the following React concepts and hooks:
* **State Composition**: Managing multiple interrelated form inputs (`Day`, `Month`, `Year`) cleanly without redundant state variables.
* **Component Communication**: Lifting state up from isolated input fields to parent containers and passing structured data down to computational views.

---

## 🚀 Features

* **Real-Time Calculation:** Automatically calculates precise age breakdowns into years, months, and days upon form submission.
* **Input Validation:** Restricts invalid dates (e.g., preventing inputs above 31 days, non-existent calendar dates, or future dates).
* **Responsive Visual Cues:** Clean interactive elements featuring a distinct action divider and vivid typographic text styling.

---

## 🛠️ Tech Stack

* **Framework:** React
* **Language:** JavaScript (ES6+)
* **Styling:** Tailwind CSS

---

## 📂 Project Structure

```text

src/
├── components/
│   ├── AgeCard.jsx
│   ├── DateInput.jsx
│   └── Results.jsx
├── App.jsx
├── main.jsx
└── index.css


