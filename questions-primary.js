// Question bank for Class 1 to 5: very simple words and sentences.
// Format: {s: skill, l: level index, q: question, o: [correct answer first, then wrong answers]}
// Options are shuffled when shown, so always put the correct answer first.
var PQ=[
{s:"Vocabulary",l:0,q:"🐱 What is this?",o:["cat","dog","bat"]},
{s:"Vocabulary",l:0,q:"🍎 What is this?",o:["apple","ball","egg"]},
{s:"Grammar",l:0,q:"This ___ a pen.",o:["is","are","am"]},
{s:"Grammar",l:0,q:"Which letter comes after C?",o:["D","A","F"]},
{s:"Reading",l:0,q:"I see a cat. What do I see?",o:["a cat","a dog","a bat"]},
{s:"Reading",l:0,q:"It is red. It is an apple. What colour is the apple?",o:["red","blue","green"]},
{s:"Vocabulary",l:1,q:"🚌 What is this?",o:["bus","bag","bed"]},
{s:"Vocabulary",l:1,q:"What colour is the sky on a sunny day?",o:["blue","red","black"]},
{s:"Grammar",l:1,q:"She ___ a girl.",o:["is","are","am"]},
{s:"Grammar",l:1,q:"One cat, two ___.",o:["cats","cat","cates"]},
{s:"Reading",l:1,q:"Sam has a red ball. What does Sam have?",o:["a red ball","a blue bat","a green hat"]},
{s:"Reading",l:1,q:"I go to school. I read books. Where do I go?",o:["to school","to the park","to the zoo"]},
{s:"Vocabulary",l:2,q:"Which word means “big”?",o:["large","tiny","short"]},
{s:"Vocabulary",l:2,q:"We eat breakfast in the ___.",o:["morning","night","moon"]},
{s:"Grammar",l:2,q:"I ___ to school every day.",o:["go","goes","going"]},
{s:"Grammar",l:2,q:"He ___ a dog.",o:["has","have","having"]},
{s:"Reading",l:2,q:"Mia likes to draw. She draws a tree and a house. What does Mia like to do?",o:["draw","sing","swim"]},
{s:"Reading",l:2,q:"It is raining, so Ravi takes an umbrella. Why does Ravi take an umbrella?",o:["It is raining","It is sunny","He is hungry"]}
];
var PTOPICS={
Grammar:[["alphabet order, is/am/are"],["he/she/it, singular and plural"],["present simple with I/he/she, has/have"]],
Vocabulary:[["animals, fruits, colours, objects"],["school things, transport, common adjectives"],["opposites, time of day, daily-life words"]],
Reading:[["one-sentence reading"],["two-sentence texts: who, what, where"],["short stories with why-questions"]]
};
