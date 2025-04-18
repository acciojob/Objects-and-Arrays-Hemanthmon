const players = ["John", "Bob", "Alice", "Poppy"];
const person = {
  name: "John Doe",
  age: 80,
};

// Reference
const team = players;

// Shallow copy of array using spread
const team1 = [...players];

// Shallow copy of object using spread
const cap1 = { ...person };

// Attaching to window for external access (as required)
window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
