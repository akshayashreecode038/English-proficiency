# 📚 English Level Finder

<p align="center">
  An Interactive English Proficiency Assessment Platform
  <br>
  Helping students discover their English proficiency level through personalized assessments and skill-based analysis.
</p>

---

## 🌟 About the Project

English Level Finder is a web-based English proficiency assessment tool designed to evaluate students' English language abilities and help teachers identify suitable starting points for instruction.

The application assesses students across three essential language skills:

- Grammar
- Vocabulary
- Reading Comprehension

Based on assessment performance, students are assigned appropriate proficiency levels, allowing teachers to understand their strengths, identify learning gaps, and plan targeted lessons.

The platform supports different assessment formats for primary school students and older learners.

## ✨ Features

- **Age-Appropriate Assessments:** Different question sets for primary and higher-grade students.
- **Multiple Proficiency Levels:** Evaluates students across different English proficiency stages.
- **Grammar Assessment:** Tests understanding of English grammar rules and sentence structures.
- **Vocabulary Assessment:** Evaluates word knowledge and vocabulary usage.
- **Reading Assessment:** Measures reading comprehension and understanding.
- **Student View:** Displays individual proficiency levels and skill-wise progress.
- **Teacher View:** Provides detailed assessment results, recommended starting topics, and revision lists.
- **AI-Powered Summary:** Includes an AI summary feature to help interpret assessment results when an AI backend is configured.
- **Performance-Based Evaluation:** Uses assessment scores to determine proficiency levels.

## 🎯 Assessment Levels

The application supports two assessment categories:

| Student Category | Assessment Levels |
|---|---|
| Classes 1–5 | Starter, Basic, Easy |
| Class 6 and Above | A1, A2, B1, B2 |

The assessment evaluates each skill independently to provide a more detailed understanding of a student's English proficiency.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Application structure |
| CSS3 | Styling and responsive interface |
| JavaScript | Assessment logic and interactivity |
| AI Integration | Intelligent assessment summaries |

## 🧠 How It Works

1. **Select Assessment:** Students take an assessment appropriate to their academic level.
2. **Answer Questions:** Complete questions covering grammar, vocabulary, and reading.
3. **Evaluate Performance:** The application calculates scores for each language skill.
4. **Determine Proficiency:** Students are assigned proficiency levels based on their performance.
5. **View Results:** Students and teachers can explore skill-wise performance.
6. **Plan Learning:** Teachers receive recommended starting topics and revision areas.

## 📊 Scoring System

The application uses a performance-based evaluation system.

- A proficiency level is considered secure when the student achieves at least 75% accuracy in that skill's questions.
- Each skill is evaluated independently.
- The highest successfully completed level without a performance gap determines the student's proficiency level.

## 📂 Project Structure

```text
English-proficiency/
│
├── english-level-finder/
│
├── ai.js
├── app.js
├── index.html
├── questions-general.js
├── questions-primary.js
├── style.css
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- A code editor such as Visual Studio Code
- Internet connection if using external AI services

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/akshayashreecode038/English-proficiency.git
```

**2. Navigate to the project directory**

```bash
cd English-proficiency
```

**3. Run the application**

Open `index.html` in your preferred web browser.

Alternatively, use the Live Server extension in Visual Studio Code.

No additional build tools or dependencies are required for the basic application.

## 🤖 AI Integration

The project includes an AI summary feature to provide additional insights into student assessment results.

The application supports connecting to an external AI backend through a configurable API endpoint.

For security, API keys should be stored on the backend rather than exposed in frontend JavaScript files.

Without a configured AI backend, the application uses its built-in summary functionality.

## 🎓 Educational Purpose

This project aims to make English proficiency assessment more accessible, structured, and informative.

It helps bridge the gap between assessment and personalized learning by giving teachers a clearer understanding of individual student abilities.

## 🔮 Future Improvements

- Student progress tracking across multiple assessments.
- Personalized learning recommendations.
- Expanded question banks.
- More detailed performance analytics.
- Teacher dashboard with student management.
- Integration with additional AI-powered learning assistance.

## 👩‍💻 Author

**Akshaya Shree S**

Computer Science and Engineering Student

[GitHub Profile](https://github.com/akshayashreecode038)

---

*Developed as an educational web application to support English language assessment and personalized learning.*
