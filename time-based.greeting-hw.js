// Time-based greeting

// 5–11 → Good Morning
// 12–16 → Good Afternoon
// 17–20 → Good Evening
// Otherwise → Good Night

let period = 21;
switch (true) {
  case period >= 5 && period <= 11:
    greet = "Good Morning";
    break;

  case period >= 12 && period <= 16:
    greet = "Good Afternoon";
    break;

  case period >= 17 && period <= 20:
    greet = "Good Evening";
    break;

  default:
    greet = "Good night";
    break;
}

console.log(greet);
