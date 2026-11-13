# English Level Finder

A placement test for English tutors and students. It finds the student's level in grammar, vocabulary and reading, then tells the teacher where to start teaching.

- **Class 1 to 5:** a very simple test (3 levels: Starter, Basic, Easy) with short words and sentences.
- **Class 6 and above:** the full test (A1 to B2).
- **Student view** and **Teacher view** with a skill-by-skill ladder, starting topics and revision list.
- **AI summary** button (see below).

## Run it
Open `index.html` in a browser. No build step. To host it free, enable GitHub Pages for the repo (Settings, Pages, branch `main`, root).

## Structure
```
index.html
css/style.css
js/questions-general.js   question bank, Class 6+
js/questions-primary.js   question bank, Class 1-5
js/ai.js                  AI summary helper
js/app.js                 test flow, scoring, results
```

## Add or edit questions
Each question is `{s: "Grammar", l: 0, q: "text", o: ["correct", "wrong", "wrong"]}`. Put the correct answer first; options are shuffled when shown. `l` is the level index (0 = easiest).

## AI summary
Without a backend the app shows its built-in summary only. To enable AI text, host a small server that holds your API key, accepts `POST {"prompt": "..."}` and returns `{"text": "..."}`, then set its URL in `AI_ENDPOINT` in `js/ai.js`. Never put an API key in the front-end code.

## Scoring
A level is secure when at least 75% of its questions in a skill are correct. A skill's level is the highest level reached without a gap.
