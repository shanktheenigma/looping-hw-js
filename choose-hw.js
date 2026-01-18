// Browser detection
// Chrome → "You are using Google Chrome. Fast and secure!"
// Firefox → "You are using Mozilla Firefox. Open-source and privacy focused!"
// Edge → "You are using Microsoft Edge. Optimized for Windows!"
// Safari → "You are using Safari. Best experience on Apple devices!"
// otherwise → "Browser not supported"

// Menu selection
// 1 → View profile
// 2 → Edit profile
// 3 → Logout

// Browser Detection
let option = "Safar";

switch (true) {
  case option == "Chrome":
    result = "You are using Google Chrome. Fast and secure!";
    break;

  case option == "Firefox":
    result = "You are using Mozilla Firefox. Open-source and privacy focused!";
    break;

  case option == "Edge":
    result = "You are using Microsoft Edge. Optimized for Windows!";
    break;

  case option == "Safari":
    result = "You are using Safari. Best experience on Apple devices!";
    break;

  default:
    result = "Browser not supported";
    break;
}

console.log(result);

// Menu Selection

let input = 4;

switch (input) {
  case 1:
    output = "View Profile";
    break;

  case 2:
    output = "Edit Profile";
    break;

  case 3:
    output = "Log out";
    break;

  default:
    output = "Undefined option!";
    break;
}

console.log(output);
